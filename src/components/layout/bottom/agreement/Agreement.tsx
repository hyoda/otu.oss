'use client';
import { useLingui } from '@lingui/react/macro';

export function Agreement() {
    const { t } = useLingui();

    return (
        <div className="absolute z-1000 text-white top-[-25px] text-[8pt]">
            {t`기능을 사용하면, 이용약관과 개인정보 보호 정책에 동의한 것으로 간주합니다.`}
        </div>
    );
}
