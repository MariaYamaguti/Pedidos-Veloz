# Pedidos Veloz

## Sobre o Projeto

O projeto **Pedidos Veloz** foi desenvolvido como atividade prática da disciplina de Arquitetura Cloud DevOps para Microsserviços.

A solução simula um ambiente de e-commerce baseado em microsserviços, utilizando conteinerização com Docker, orquestração com Kubernetes, integração contínua (CI/CD) e práticas de observabilidade.

---

## Arquitetura

A aplicação é composta pelos seguintes serviços:

* API Gateway
* Serviço de Pedidos
* Serviço de Pagamentos
* Serviço de Estoque
* Banco de Dados PostgreSQL

### Fluxo da Aplicação

Cliente → API Gateway → Pedidos → Pagamentos → Estoque → PostgreSQL

---

## Tecnologias Utilizadas

* Node.js
* Express
* Docker
* Docker Compose
* PostgreSQL
* Kubernetes
* GitHub Actions
* Terraform

---

## Estrutura do Projeto

```text
pedidos-veloz/

├── api-gateway/
├── pedidos-service/
├── pagamentos-service/
├── estoque-service/
├── kubernetes/
├── terraform/
├── .github/workflows/
├── docker-compose.yml
└── README.md
```

---

## Como Executar Localmente

### Pré-requisitos

* Docker Desktop
* Git
* VS Code (opcional)

### Clonar o Projeto

```bash
git clone https://github.com/MariaYamaguti/Pedidos-Veloz.git
```

### Acessar a Pasta

```bash
cd Pedidos-Veloz
```

### Subir os Serviços

```bash
docker compose up --build
```

---

## Serviços Disponíveis

| Serviço     | Porta |
| ----------- | ----- |
| API Gateway | 8080  |
| Pedidos     | 3001  |
| Pagamentos  | 3002  |
| Estoque     | 3003  |
| PostgreSQL  | 5432  |

---

## Testes

Após iniciar os containers, acessar:

http://localhost:8080

Resultado esperado:

API Gateway OK

http://localhost:3001

Resultado esperado:

Pedidos Service OK

http://localhost:3002

Resultado esperado:

Pagamentos Service OK

http://localhost:3003

Resultado esperado:

Estoque Service OK

---

## Estratégia de Deploy

A estratégia adotada para produção é Rolling Update utilizando Kubernetes, permitindo atualização gradual dos pods sem indisponibilidade do serviço.

---

## Escalabilidade

Foi definida a utilização de Horizontal Pod Autoscaler (HPA), permitindo escalabilidade automática baseada no consumo de CPU.

---

## Observabilidade

A solução prevê:

* Prometheus para métricas
* Grafana para dashboards
* OpenTelemetry para tracing distribuído
* Jaeger para visualização de traces

---

## Infraestrutura como Código

A infraestrutura é definida utilizando Terraform, permitindo reprodutibilidade e versionamento dos recursos em nuvem.

---

## Autor

Maria Eduarda Yamaguti
