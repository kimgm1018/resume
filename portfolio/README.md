# 김강민 포트폴리오 초안

`index.html`을 브라우저에서 열면 됩니다. 기존 이력서는 상위 폴더에 그대로 보존했습니다.

## 사진 교체

각 `photo-frame`, `placeholder`, `portrait`, `moment-grid`의 사진 이름 텍스트를 실제 `<img>`로 교체하면 됩니다. 이미지에는 의미 있는 `alt`를 넣고, 컨테이너 크기에 맞게 `width:100%; height:100%; object-fit:cover`를 적용하세요. 외부 폰트를 못 불러와도 시스템 글꼴로 표시됩니다.

## 초안의 근거

- 기존 `../index.html`: 이름, 소개, 경력, 학력, 의료 챗봇, 할래말래
- https://github.com/kimgm1018/RoKi/blob/master/ai/README.md : 탐지·OCR 파이프라인 및 OCR 완전일치 검증 정확도 약 0.93.
- https://github.com/kimgm1018/star_news/blob/master/README.md : 프로젝트 기능과 구성. 김강민의 팀 역할 Infra · AI 확인.
- 디자인 참고: https://danielsun.space/ (대형 소개 문구, 프로젝트 중심 구성, 개인 이야기)

- https://github.com/kimgm1018/chat_bot/blob/main/README.md : 예약·의뢰 대화 상태 관리, 정보 수집, SMTP 메일, 기록 저장. 위험약물 RAG 설명은 아래 Notion 자료로 보완.
- https://github.com/junfn1018-cmd/autocalling_web/blob/main/README.md : 4개 패널, 3개 ratio 분석, 다이플로타입 후보와 시각화.
- 연결된 Notion의 ‘자소서 소스 정리’: ROKI 개인 담당, 4주 시현, 의료 챗봇·약물 리포트·변이 알고리즘 구분, 할래말래 렌더링 개선과 교육 실적.
- 사용자 정정(2026-10-28): SPMED 2025.08~2025.10, SSAFY 2026.01~현재.

## 성과 해석

ROKI의 개인 역할과 실물 시현은 Notion, OCR 정확도는 GitHub와 Notion에서 교차 확인했습니다. 탐지 mAP는 최종 배포와 별도 검증셋 수치가 달라 노출하지 않았습니다. 별빛뉴스는 개인 역할(Infra · AI)과 프로젝트 전체 성과를 구분했습니다. 약 98%의 변이 판별 정확도와 약 20초의 챗봇 응답 시간은 Notion에서 기억 기반으로 분류되어 수록하지 않았습니다. 할래말래 렌더링 10초→1초 이내와 지도 로딩 15~30초→2초 이내는 서로 다른 지표이며, 현재 초안은 Notion의 렌더링 기록을 사용합니다.

Notion 원문, 자격번호, 개인 서류는 사이트에 복사하지 않았습니다. 사진 영역은 배치 제안입니다. 상위 폴더의 기존 이력서는 별도 원본이므로 경력 기간 등 예전 정보가 남아 있습니다.

수상 내역은 사용자 확인에 근거합니다: 할래말래 최우수, R0-Ki 우수, 별빛뉴스 최우수. 수상 날짜와 공식 대회명은 임의로 추가하지 않았습니다.

## 개인 기여만 표기

별빛뉴스의 Event·Story 통합, 추천, 분석 복구와 KG 모델 공개·배포는 개인 담당 근거가 확인되지 않아 성과 목록에서 제거했습니다. 현재 확인된 역할인 Infra·AI만 남겼으며, 세부 담당은 사용자 확인 후 반영합니다. ROKI의 전체 시스템 구현·팀 시현도 개인 기여에서 제외했습니다. 수상은 팀 프로젝트의 배지로만 유지합니다. AutoCalling 웹 시각화도 개인 담당이 명확하지 않아 제거했습니다.

사용자가 별빛뉴스 개인 담당을 EC2, Jenkins 기반 CI/CD, 파이프라인 구성으로 확인했습니다. 사이트는 이 세 항목으로 구체화했으며 AI 세부 기여는 확인 전까지 기재하지 않습니다.

별빛뉴스 인프라 담당에 사용자가 추가 확인한 Nginx, Docker, Docker Compose 활용을 반영했습니다.

## 프로젝트 사진 카드

ROKI와 별빛뉴스는 `photo-deck` 버튼 안에 `shuffle-card` 두 개를 겹쳐 표시합니다. 각 카드의 `<img src="../파일명.png" alt="사진 설명">`을 교체하면 됩니다. 현재 ROKI는 roki.png와 roki_detect_lying_person.png, 별빛뉴스는 별빛뉴스.png와 별빛뉴스_그래프_이미지.png를 사용합니다. roki_detect_bin.png는 교체용으로 사용할 수 있습니다. 마우스 진입마다 한 번 교체하고, 클릭·터치·키보드 Enter/Space로도 교체합니다. 동작 줄이기 설정에서는 이동 없이 순서만 바뀝니다.

## RunWay (2026-11-20 추가)

- 근거: SSAFY 팀 GitLab 저장소(비공개)의 김강민 개인 커밋 82건(2026-10-26 ~ 2026-11-18). 저장소가 비공개라 링크 대신 출처 문구만 표시했습니다.
- 개인 기여로 적은 항목은 모두 본인 커밋으로 확인한 것입니다: 그룹런 API(G01–G16, 시작·라이브·강제종료·결과), 실시간 순위 계산기(GroupRunLiveRanking), 러닝 종료 후 분석(AFTER_COMMIT 이벤트 + 재기동 복구), AI06 심박 개인화 비동기 연동, 크루 승인 비관적 잠금, PostGIS↔GeoJSON 유틸, 커뮤니티·크루·코스 API, 후반 FE·Wear 연동과 QA 수정.
- 팀 전체 기능(AI 코스 추천 모델, 준비도 분석 등)은 개인 기여에 넣지 않았습니다. 팀 내 공식 역할명·수상 여부가 정해지면 배지와 문구를 보완하세요.
- 카드 사진: runway_cover.png(홍보 이미지, Downloads), runway_watch_rank.png·runway_watch_pace.png(팀 저장소 docs/design/watch-handoff 워치 디자인 시안). 실기기·앱 캡처가 생기면 같은 photo-deck에서 교체하세요.
