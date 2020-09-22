import React, { useCallback, useRef } from 'react';
import { FiMail } from 'react-icons/fi';
import { FaStar, FaUsers } from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';
import { MdHourglassFull } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logoAzul.png';
import triangle1 from '../../assets/mulherAzul.png';
import triangle2 from '../../assets/tecladoAzul.png';
import triangle3 from '../../assets/foneAzul.png';

import Button from '../../components/Button';
import ButtonHeader from '../../components/ButtonHeader';
import Card from '../../components/Card';
import MoneyCard from '../../components/MoneyCard';
import InputGreen from '../../components/InputGreen';
import Footer from '../../components/Footer';

import {
  Container,
  Content,
  Page,
  Header,
  Logo,
  ContainerButtons,
  ContainerMid,
  ContainerCard,
  CardIntro,
  ContainerCaution,
  ContainerShop,
  ContainerSubscribe,
  ContainerContact,
} from './styles';

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Page>
        <Header>
          <ButtonHeader>Home</ButtonHeader>
          <a href="#cards">
            <ButtonHeader>Sobre</ButtonHeader>
          </a>
          <a href="#plans">
            <ButtonHeader>Planos</ButtonHeader>
          </a>
          <a href="#contact">
            <ButtonHeader>Contato</ButtonHeader>
          </a>
        </Header>
        <Logo src={logoImg} alt="WeSportsLogo" />
        <Container>
          <Content>
            <img src={triangle1} alt="WeSports" />
          </Content>
          <Content>
            <section>
              <h1>Analise seus treinos</h1>
              <p>
                Não basta treinar. A análise de seus treinos é essencial para
                melhorar o nível do seu time.
              </p>
              <ContainerButtons>
                <a href="#plans">
                  <Button type="submit">Planos e preços</Button>
                </a>
                <a href="#contact">
                  <ButtonHeader type="submit">Comece agora</ButtonHeader>
                </a>
              </ContainerButtons>
            </section>
          </Content>
        </Container>
        <ContainerMid>
          <img src={triangle2} alt="WeSports" />
          <div>
            <h1>Descubra onde seu time está errando</h1>
            <p>Faça uma série de treino analisado por um coach</p>
            <p>e receba um relatório detalhado do desempenho do seu time.</p>
            <p>Análise por role e por macrogame (early, mid e late game)</p>
          </div>
        </ContainerMid>
        <ContainerCard id="cards">
          <CardIntro>
            <div className="title-font">
              <p>SCRIM com ANÁLISE</p>
            </div>
            <h1>Em que uma análise pode te ajudar?</h1>
            <p>
              O treino é fundamental para a melhora constante. Mas a análise
              desses treinos é onde realmente faz a diferença. Descobrir os
              pontos fracos para poder arrumar e melhorar cada vez mais.
            </p>
            <a href="#plans">
              <Button>Todas as vantagens</Button>
            </a>
          </CardIntro>
          <div>
            <Card
              title="Análise exclusiva"
              content="Uma análise exclusiva para uma série de treinos do seu time. Durante a série o foco vai ser o seu time."
            >
              <FaStar size={30} color="#78FAF3" />
            </Card>
            <Card
              title="Aprenda com os erros"
              content="Permita-se errar para saber onde pode melhorar."
            >
              <IoMdAlert size={30} color="#78FAF3" />
            </Card>
          </div>
          <div>
            <Card
              title="Melhore a team play"
              content="Não é só a melhora individual que vai melhorar sua equipe. Evolua como time."
            >
              <FaUsers size={30} color="#78FAF3" />
            </Card>
            <Card
              title="Treinos limitados"
              content="Os treinos são limitados e por tempo limitado. Portanto, aproveite a oportunidade."
            >
              <MdHourglassFull size={30} color="#78FAF3" />
            </Card>
          </div>
        </ContainerCard>
        <ContainerCaution>
          <img src={triangle3} alt="WeSports" />
          <div>
            <h1>VAGAS LIMITADAS</h1>
            <p>As vagas são limitadas e por tempo limitado.</p>
          </div>
        </ContainerCaution>
        <ContainerShop id="plans">
          <MoneyCard
            title="1 Análise"
            cardValue="R$30,00"
            content="Um relatório detalhado com a análise de 1 treino. Análise por role e macrogame"
            cardSpan="Apenas R$6,00 por jogador"
          >
            <Button>Compre agora</Button>
          </MoneyCard>
          <MoneyCard
            title="3 Análises"
            cardValue="R$50,00"
            content="Um relatório detalhado com a análise de 3 treinos. Análise por role e macrogame"
            cardSpan="Apenas R$10,00 por jogador"
          >
            <Button>Compre agora</Button>
          </MoneyCard>
          <MoneyCard
            title="5 Análises"
            cardValue="R$60,00"
            content="Um relatório detalhado com a análise de 5 treinos. Análise por role e macrogame"
            cardSpan="Apenas R$12,00 por jogador"
          >
            <Button>Compre agora</Button>
          </MoneyCard>
        </ContainerShop>
        <p>Não gostou? Devolvemos seu dinheiro!</p>
        <ContainerSubscribe>
          <section>
            <h1>Faça parte de um seleto grupo de times</h1>
            <p>
              Quer fazer parte de um seleto grupo de times que buscam a melhora
              constante e treinos de qualidade? Inscreva-se em nossa Newsletter
              para ficar por dentro das novidades.
            </p>
          </section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputGreen name="email" icon={FiMail} placeholder="E-mail" />
          </Form>
          <Button>Assinar</Button>
        </ContainerSubscribe>
        <h2>CONTATO</h2>
        <ContainerContact id="contact">
          <section>
            <h1>Alguma dúvida?</h1>
            <h1>Mande uma mensagem.</h1>
          </section>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputGreen name="userName" icon={FiMail} placeholder="Nome" />
            <InputGreen name="email" icon={FiMail} placeholder="E-mail" />
            <InputGreen name="message" icon={FiMail} placeholder="Mensagem" />
            <Button>Enviar</Button>
          </Form>
        </ContainerContact>
        <Footer />
      </Page>
    </>
  );
};

export default SingUp;

/*  */
