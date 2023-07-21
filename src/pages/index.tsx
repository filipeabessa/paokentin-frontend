import Typography from "@/components/dataDisplay/Typography";
import Box from "@/components/layout/Box";
import BaseLayout from "@/layouts/Base";
import Image from "next/image";

export default function Home() {
  return (
    <BaseLayout
      pageTitle='Home'
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        height="100vh"
        padding="20px"
      >
        <Image 
          src="/paokentin-logo.png"
          alt="logo"
          width={700}
          height={300}
        />
        <Typography
          variant="h6"
        >
          PaoKentin é um aplicativo Web desenvolvido para fixar os conteúdos da disciplina de Desenvolvimento Web 2 do curso de Análise e Desenvolvimento de Sistemas do IFPE - Campus Recife ministrada pelo professor Dr. Eduardo de Melo Vasconcelos. O back-end da aplicação foi desenvolvido em Java com Spring Boot e o front-end foi desenvolvido em React JS, utilizando o framework Next.js.
        </Typography>
      </Box>
    </BaseLayout>
  );
}
