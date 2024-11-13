# react에 typescript 설치

1. 리액트 설치
   - npx create-react-app .
2. type package 설치
   - npm i @types/node @types/react @types/react-dom @types/jest
3. tsconfig.json 설정

   ```
   {
     "compilerOptions": {
       "target": "ES5",
       "module": "CommonJS",
       "strict": true,
       "allowJs": true,
       "esModuleInterop": true,    // default로 내보낸 값이 없을때에도 그냥 모듈을 불러올 수 있도록 허용
       "jsx": "react-jsx"          // ts컴파일러가 jsx를 해석하도록 설정
     },
     "include": ["src"]
   }
   ```

4. js 파일 -> jsx로 변경
5. 개별파일들을 하나씩 tsx로 변경
