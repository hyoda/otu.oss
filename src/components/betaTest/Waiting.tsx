'use client';
import { useAtomValue } from 'jotai';
import React from 'react';
import { isDarkModeAtom } from '@/lib/jotai';
import Image from 'next/image';
import { useLingui } from '@lingui/react/macro';

export function Waiting() {
    const darkMode = useAtomValue(isDarkModeAtom);
    const { t } = useLingui();

    return (
        <div className="dark:text-white flex justify-center items-center w-screen h-screen">
            <div>
                <p>{t`OTU에 관심을 가져주셔서 감사합니다.`}</p>
                <p>{t`열심히 손님맞이 준비 중입니다.`}</p>
                <p>{t`모실 준비가 되면 이메일로 연락드리겠습니다.`}</p>
                <p>{t`기다려주셔서 감사합니다!`}</p>
                <p className="flex justify-center mt-4">
                    <Image
                        src={`/waiting/cleaning.${darkMode ? 'dark.' : ''}svg`}
                        width="100"
                        height="100"
                        alt="cleaning image"
                    ></Image>
                </p>
            </div>
        </div>
    );
}
