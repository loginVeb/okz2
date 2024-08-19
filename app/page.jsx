import Image from "next/image";
import styles from "./page.module.css";
import Header from '@/components/header/header';
import H1 from '@/components/forma/login/h1';

import DivForm from '@/components/forma/login/divForm';


export default function Main() {
  return (
    <main className={styles.mainPageDiv}>
      <Header styles={styles} />
      <H1 />
      <DivForm styles={styles} />
    </main>
  )
}
// contr+shift+p settings настройки
// shift+alt+t перевод выделеной строки на русский
//contr+1 скриншот
// OneDrive/'Рабочий стол'/

// npm run dev
// git add ./
// git commit -am '
//  git push
// git pull 
// vercel --prod
// git log
// git stash
// git push -f origin HEAD~1:main
// npm run build
// Удолить локально коммит
// git reset HEAD~


// npx prisma
// npx prisma init
// npx prisma db pull
// mkdir -p prisma/migrations/0_init
// npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
// npx prisma migrate resolve --applied 0_init~

// npx prisma studio