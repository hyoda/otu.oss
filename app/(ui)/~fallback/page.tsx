'use client';

import { useSearchParams } from 'next/navigation';
import { Trans } from '@lingui/react/macro';

export default function Error() {
    const searchParams = useSearchParams();
    const message = searchParams?.get('message');
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <h2 className="dark:text-white">
                <Trans>
                    해당 페이지를 온라인에서 한번 접속해 주세요.
                    <br />
                    한번 접속하면 페이지가 저장돼 오프라인에서도 접속 가능해집니다.
                </Trans>
            </h2>
            <h2 className="dark:text-white">{message}</h2>
        </div>
    );
}
