'use client';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import { useEffect, useState } from 'react';
import s from './Notice.module.css';
import Image from 'next/image';
import { useLingui } from '@lingui/react/macro';

export function Notice() {
    const { t } = useLingui();
    const NOTICE_ID = '0';
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('notice_hide');
        if (id !== NOTICE_ID) {
            setOpen(true);
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleHide = () => {
        localStorage.setItem('notice_hide', NOTICE_ID);
        setOpen(false);
    };

    if (!open) return null;

    return (
        <Dialog open={open}>
            <DialogContent>
                <div className={s.root}>
                    <h1>{t`속도가 빨라졌습니다.`}</h1>
                    {t`브라우저에 데이터를 저장하기 때문에 서버에서 데이터를 가져오는 것 보다 훨씬 빠릅니다.`}
                    <h1>{t`익명 사용자 기능 출시`}</h1>
                    {t`회원가입 없이, 서버로 데이터를 전송하지 않고 사용할 수 있게 되었습니다.`}
                    <Image
                        src="https://ucarecdn.com/07e22b8a-7c43-4458-9f71-e03fad831584/-/preview/720x720/"
                        alt={t`스크린샷`}
                        width="400"
                        height="400"
                    ></Image>
                    <h1>{t`AI 채팅 강화`}</h1>
                    <p>{t`1. 언어모델을 선택할 수 있게 되었습니다.`}</p>
                    <p>{t`2. 참조 대상을 선택할 수 있게 되었습니다.`}</p>
                    <Image
                        src="https://ucarecdn.com/c5e6b646-7613-4c81-9bd7-b84ecd3e820f/"
                        alt={t`스크린샷들`}
                        width="400"
                        height="400"
                    ></Image>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleHide}>{t`그만 보기`}</Button>
                <Button onClick={handleClose}>{t`확인`}</Button>
            </DialogActions>
        </Dialog>
    );
}
