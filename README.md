typescript, yarn 사용

1. 폴더 구조

(src)
assets
components
constants
helper
modules (related to native)
routes (navigation)
utils
views
redux (ducks pattern)
hooks

2. 라이브러리 (일단 모두 안드로이드만 세팅 됨)

react-navigation
babel-plugin-module-resolver
react-native-vector-icons(+ @types/react-native-vector-icons)

?? 220602
stack navigation typescript 에서 type vs interface 문제가 있다.
interface를 쓰면 'RootStackParamList' 형식이 'ParamListBase' 제약 조건을 만족하지 않습니다.
'RootStackParamList' 형식에 인덱스 시그니처 유형 'string'이(가) 없습니다. <- 이라는 에러가 뜬다.
==> type vs interface 차이 정리하기

220613
DrawNavigator는 진짜 에러도 많고 마음에 안든다 제외.
