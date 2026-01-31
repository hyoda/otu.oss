# OTU 커스텀 PostgreSQL: Supabase PostgreSQL + pgvector
# supabase/postgres에 pgvector가 기본 포함되어 있음
FROM supabase/postgres:15.6.1.143

# pgroonga는 선택사항 — 설치 실패 시 무시 (일본어 전문검색용)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ca-certificates wget gnupg && \
    (wget -q https://packages.groonga.org/ubuntu/groonga-apt-source-latest-focal.deb -O /tmp/groonga.deb && \
     dpkg -i /tmp/groonga.deb && \
     apt-get update && \
     apt-get install -y --no-install-recommends postgresql-15-pgdg-pgroonga || \
     echo "pgroonga not available — skipping") && \
    rm -f /tmp/groonga.deb && \
    rm -rf /var/lib/apt/lists/*
