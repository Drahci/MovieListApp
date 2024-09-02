import styled from "styled-components";

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 12px; /* Reduzido de 16px para 12px */
  padding: 12px; /* Adicionado padding para ajustar o conteúdo */
  width: 240px; /* Aumentado de 180px para 240px */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieCardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px; /* Reduzido de 16px para 12px */
`;

export const MovieCardTitle = styled.h2`
  font-size: 1.2em; /* Reduzido de 1.5em para 1.2em */
  margin: 0;
  margin-bottom: 8px;
  text-align: center;
  height: 3em; /* Altura fixa para garantir que o layout não quebre */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieCardRating = styled.span`
  font-size: 0.9em; /* Reduzido de 1em para 0.9em */
  color: #ffcc00;
  margin-bottom: 12px; /* Reduzido de 16px para 12px */
`;

export const MovieIcon = styled.div`
  cursor: pointer;
  margin-left: 8px; /* Espaçamento entre o ícone e o botão */
`;

export const MovieButtonMoreDetails = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px; /* Reduzido de 10px 20px para 8px 16px */
  font-size: 0.9em; /* Reduzido de 1em para 0.9em */
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

export const MovieCardFooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: baseline;
  margin-top: 12px; /* Adicionado margin-top para espaçamento */
`;
