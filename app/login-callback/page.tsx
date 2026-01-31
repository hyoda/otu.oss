// app/login-callback/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useLingui } from '@lingui/react/macro';
import Loading from '../(ui)/loading';
import '@/app/globals.css';

export default function LoginCallbackPage() {
    const { t } = useLingui();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // URL 쿼리 파라미터에서 code를 추출합니다.
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (code) {
            // code가 있으면 커스텀 스킴으로 리디렉션합니다.
            const customSchemeUrl = `otuai://login-callback?code=${code}`;
            window.location.href = customSchemeUrl;
        } else {
            // code가 없는 경우 (오류)
            const errorDescription = params.get('error_description') || 'Authentication failed';
            setError(
                t`인증 처리 중 오류가 발생했습니다. 불편을 드려 죄송합니다. 앱으로 돌아가 다시 시도해 주세요.`
            );

            // 1. 오류를 콘솔에 로깅합니다.
            console.error('Login callback error:', errorDescription);
        }
    }, [t]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                fontSize: '16px',
                fontWeight: 'normal',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            {/* {error ? <>{error}</> : <Loading />} */}
            <Loading />
        </div>
    );
}
