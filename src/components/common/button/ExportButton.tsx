import { openConfirmState } from '@/lib/jotai';
import Button from '@mui/material/Button';
import { useSetAtom } from 'jotai/index';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { useLingui } from '@lingui/react/macro';
function getCurDatetime() {
    const now = new Date();

    return (
        now.getFullYear() +
        (now.getMonth() + 1).toString().padStart(2, '0') +
        now.getDate().toString().padStart(2, '0') +
        '_' +
        now.getHours().toString().padStart(2, '0') +
        now.getMinutes().toString().padStart(2, '0') +
        now.getSeconds().toString().padStart(2, '0')
    );
}

export default function AsyncCSV() {
    const openConfirm = useSetAtom(openConfirmState);
    const { t } = useLingui();

    async function downloadCSV() {
        openConfirm({
            message: t`JSON 파일을 다운로드하시겠습니까?`,
            onNo: () => {},
            noLabel: t`취소`,
            yesLabel: t`다운로드`,
            onYes: async () => {
                try {
                    const res = await fetch('/api/setting/export');
                    const data = await res.json();

                    if (data.message === 'success') {
                        if (data.data.length === 0) {
                            openConfirm({
                                message: t`다운로드할 데이터가 없습니다.`,
                                onYes: () => {},
                                yesLabel: t`확인`,
                            });
                            return;
                        }

                        const datetimeStr = getCurDatetime();
                        const filename = `OTU_AI_${datetimeStr}`;
                        const blob = new Blob([`\ufeff${JSON.stringify(data.data)}`], {
                            type: 'text/json',
                        });

                        const zip = new JSZip();
                        zip.file('page.json', blob);
                        zip.generateAsync({ type: 'blob' }).then(function (content) {
                            const zipFilename = `${filename}.zip`;
                            saveAs(content, zipFilename);
                        });
                    } else {
                        openConfirm({
                            message: t`데이터를 가져오는 데 실패했습니다.`,
                            onYes: () => {},
                            yesLabel: t`확인`,
                        });
                    }
                } catch (e: any) {
                    openConfirm({
                        message: t`치명적 오류입니다. 관리자에게 문의하십시오.`,
                        onYes: () => {},
                        yesLabel: t`확인`,
                    });
                }
            },
        });
    }

    return (
        <Button variant="contained" onClick={downloadCSV} color="primary">
            {t`다운로드`}
        </Button>
    );
}
