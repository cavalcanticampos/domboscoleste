import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";
import { TitleContainer, Grid, BodyNotice } from "./styles";
import campanhaMatricula from "../../images/matriculas2021.jpeg";
import { Helmet } from "react-helmet";

const SecNotice = (props) => {
  return (
    <div>
      <Helmet>
        <meta
          property="og:title"
          content="O Colégio Dom Bosco Leste inicio da campanha de matrículas 2021."
        ></meta>
        <meta property="og:image" content={campanhaMatricula}></meta>
        <meta property="og:image:type" content="image/jpg"></meta>
        <meta property="og:url" content={window.location.href}></meta>
      </Helmet>
      <TitleContainer>
        <Grid>
          <h3
            style={{
              color: "#1c3f95",
              fontSize: "28px",
              fontFamily: "Dekar, sans-serif",
              fontWeight: 700,
            }}
          >
            Notícia
          </h3>
          <h4
            style={{
              color: "#333399",
              fontSize: "24px",
              fontFamily: "Dekar, sans-serif",
              display: "flex",
              marginLeft: "auto",
            }}
          >
            Fique por dentro de tudo que acontece!
          </h4>
        </Grid>
      </TitleContainer>
      <BodyNotice>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{ maxWidth: "500px", maxHeight: "335px", padding: "12px" }}
              src={campanhaMatricula}
              alt={"campanha de matrículas 2021"}
            />
            {/* <span>Missa Solene em Honra à Nossa Senhora Auxiliadora.</span> */}
          </div>
          <div
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                color: "#1c3f95",
                fontSize: "20px",
                textAlign: "left",
                fontFamily: "inherit",
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              Campanha e Renovação de Matrículas 2021.
            </h2>
            <p>
              Iniciamos no dia 18/09 (sexta-feira) com a Rede Salesiana Brasil a
              Campanha e renovação de Matrículas para 2021 com o tema: Juntos
              Para Você Ser +. Reafirmamos a grande satisfação em tê-los como
              membros integrantes da comunidade educativa do Colégio Dom Bosco
              Leste. Damos a partida ao Lançamento de Matrículas, venha mudar o
              mundo junto conosco! Agende sua visita! Mais informações: (92)
              3131-4116/ 99259-9150 #JuntosParaVocêMudarOmundo
              #JuntosParaVocêSer+ #MatrículasAbertas #SomosArsb #RSB
            </p>
            <div>
              Clique
              <a
                href="https://www.flickr.com/photos/190154461@N08/albums/72157716063955147"
                target="_blank noreferrer"
              >
                {" "}
                aqui
              </a>{" "}
              para ver todas as fotos
            </div>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  display: "flex",
                  margin: "auto 0",
                }}
              >
                Compartilhe:{" "}
              </span>
              <FacebookShareButton
                style={{
                  margin: "4px",
                  color: "#4267b2",
                }}
                quote={
                  "O Colégio Dom Bosco Leste inicia campanha e renovação de matrículas 2021."
                }
                url={`https://www.domboscoleste.com.br${window.location.pathname}`}
              >
                <Helmet>
                  <meta
                    property="og:title"
                    content="O Colégio Dom Bosco Leste inicia campanha e renovação de matrículas 2021."
                  ></meta>
                  <meta property="og:image" content={campanhaMatricula}></meta>
                  <meta property="og:image:type" content="image/jpg"></meta>
                  <meta property="og:url" content={window.location.href}></meta>
                </Helmet>
                <GrFacebook size={"2em"} />
              </FacebookShareButton>
              <LinkedinShareButton
                style={{ color: "#0077b5" }}
                url={window.location.href}
              >
                <GrLinkedin size={"2em"} />
              </LinkedinShareButton>
              <WhatsappShareButton
                style={{ color: "#075e54" }}
                url={window.location.href}
                title={
                  "O Colégio Dom Bosco Leste inicia campanha e renovação de matrículas 2021"
                }
              >
                <FaWhatsappSquare size={"2.5em"} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </BodyNotice>
    </div>
  );
};

export default SecNotice;
