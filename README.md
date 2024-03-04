<p align="center">
  <img src="/public/preview.png" alt='preview'>
</p>
<p align="center">
  Source code of my <a href='https://boti.akhamr.me'>first project</a>. Made using Next.js, Vercel KV, and OpenAI API.
</p>

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/akhamr/boti.git
cd boti
npm i
npm run dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/akhamr/boti/blob/master/.env.example), and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or do you want to deploy it yourself? Just click this button here &dArr;

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fakhamr%2Fboti&env=OPENAI_API_KEY,AUTH_GITHUB_ID,AUTH_GITHUB_SECRET,AUTH_SECRET&envDescription=How%20to%20get%20this%20env%20vars%3F&envLink=https%3A%2F%2Fgithub.com%2Fakhamr%2Fboti%2Fblob%2Fmaster%2F.env.example&demo-title=OpenAI%20Clone&demo-description=Built%20with%20Next.js%2C%20Vercel%20KV%2C%20OpenAI%20API%2C%20and%20a%20lot%20of%20stress...&demo-url=https%3A%2F%2Fboti.akhamr.me&demo-image=https%3A%2F%2Fboti.akhamr.me%2Fdemo.png&stores=[{%22type%22:%22kv%22}])

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Deployment**: [Vercel](https://vercel.com)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com)
    - **Component**: [shacdn/ui](https://ui.shadcn.com/)
    - **Icon**: [Phosphor Icons](https://phosphoricons.com/)
-   **Authentication**: [Auth.js](https://authjs.dev/)
-   **Database**: [Vercel KV](https://vercel.com/docs/storage/vercel-kv)

## Credits

Thanks to my inspiration during building this project

-   [Next.js AI](https://sdk.vercel.ai/)
-   [ChatGPT](https://platform.openai.com/)

## License

Licensed under [BSD-2-Clause License, Copyright :copyright: 2024 Khamid Arrazaq](./LICENSE)
