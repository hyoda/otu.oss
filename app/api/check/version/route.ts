// 이 파일은 버전 정보를 반환하는 API 엔드포인트를 정의합니다.

export async function GET(req: Request) {
    const commitId = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'unknown';
    return new Response(commitId, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-store',
        },
    });
}
