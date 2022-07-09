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
DrawNavigator는 에러가 많다.
잘됬는데도 에러가 뜨면 직접 android 디렉토리가서 ./gradlew clean으로 캐시정리 해주고 또
npx react-native --reset -cache로 리액트네이티브 캐시도 정리해줘야 한다.

220614
image picker

220709
종종 android 실행할 때 네이티브 에러가 난다. build 안 파일이 꼬여서 그렇다.
packagejson 명령어 수정 rm -r ./android/app/build && react-native run-android
