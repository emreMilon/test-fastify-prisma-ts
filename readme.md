npm install
npx prisma migrate dev --name init
npx prisma db seed  // to create initial posts
npm run dev // to start the app 