import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { chatMessagesState } from '@/lib/jotai';
import { useAtom, useSetAtom } from 'jotai';
import TrashIcon from '@/public/icon/Trash';
import { useLingui } from '@lingui/react/macro';

export function CleanMessage() {
    const { t } = useLingui();
    const [chatMessages, setChatMessages] = useAtom(chatMessagesState);
    const cleanHandler = () => {
        setChatMessages([]);
    };
    return (
        <Tooltip title={t`채팅 내용 삭제`}>
            <span>
                <Button
                    startIcon={<TrashIcon style={{ fontSize: '1.1rem' }} />}
                    onClick={cleanHandler}
                    sx={{
                        fontSize: '0.7rem',
                        '& .MuiButton-startIcon': {
                            marginRight: 0.5,
                        },
                    }}
                    disabled={chatMessages.length === 0}
                >
                    {t`삭제`}
                </Button>
            </span>
        </Tooltip>
    );
}
