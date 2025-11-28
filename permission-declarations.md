# Declarações de Permissões Sensíveis - Play Console

Use estas justificativas ao preencher o formulário de "Declaração de Permissões" no Google Play Console.

---

## READ_CALL_LOG (Ler Registro de Chamadas)

**Tipo de uso:** Call Screening (Filtragem de Chamadas)

**Justificativa:**
```
O Tenha Paz é um aplicativo de bloqueio de chamadas que funciona como Call Screening App oficial do Android. A permissão READ_CALL_LOG é essencial para a função principal do aplicativo: identificar chamadas recebidas e aplicar regras de bloqueio configuradas pelo usuário. O aplicativo usa a API CallScreeningService do Android 10+ para filtrar chamadas indesejadas. Sem esta permissão, o aplicativo não consegue identificar o número que está ligando para decidir se deve bloquear ou permitir a chamada. Os dados do registro de chamadas são processados apenas localmente no dispositivo e nunca são transmitidos para servidores externos.
```

---

## READ_CONTACTS (Ler Contatos)

**Justificativa:**
```
O Tenha Paz possui um "Modo Seletivo" que permite apenas chamadas de pessoas que estão na lista de contatos do usuário. A permissão READ_CONTACTS é necessária para verificar se o número que está ligando pertence a um contato salvo no dispositivo. Esta verificação é feita localmente no dispositivo durante o processamento da chamada. Os dados de contatos não são armazenados, copiados ou transmitidos - são apenas consultados no momento da chamada para determinar se deve ser permitida ou bloqueada.
```

---

## READ_PHONE_STATE (Ler Estado do Telefone)

**Justificativa:**
```
A permissão READ_PHONE_STATE é necessária para que o aplicativo detecte chamadas recebidas e funcione corretamente como Call Screening App. Esta permissão permite que o serviço de filtragem de chamadas seja notificado quando uma chamada é recebida, possibilitando a aplicação das regras de bloqueio configuradas pelo usuário.
```

---

## ANSWER_PHONE_CALLS (Atender Chamadas)

**Justificativa:**
```
Esta permissão é requerida pela API CallScreeningService do Android para que o aplicativo possa gerenciar chamadas como Call Screening App oficial. Ela permite que o sistema operacional delegue ao aplicativo a decisão de permitir ou rejeitar chamadas recebidas com base nas configurações do usuário.
```

---

# Formulário de Declaração - Respostas

## Perguntas Comuns do Google:

**1. O aplicativo é um discador, gerenciador de chamadas ou app de SMS?**
- Resposta: Sim, é um Call Screening App (gerenciador de chamadas)

**2. Qual é a função principal que requer essas permissões?**
- Resposta: Bloqueio de chamadas indesejadas e spam

**3. Os dados são transmitidos para servidores externos?**
- Resposta: NÃO. Todos os dados são processados localmente no dispositivo.

**4. O aplicativo compartilha dados com terceiros?**
- Resposta: NÃO. O aplicativo não compartilha nenhum dado.

**5. Link para demonstração em vídeo:**
- Você precisará criar um vídeo curto (1-2 min) mostrando:
  - Como o app bloqueia chamadas
  - As configurações de modo (Disponível/Seletivo/Total)

---

# Categoria do App na Play Store

**Categoria Principal:** Ferramentas (Tools)
**Subcategoria:** Bloqueador de Chamadas / Call Blocker

---

# Notas Importantes

1. O Google pode levar 3-7 dias para revisar a declaração de permissões
2. Tenha o vídeo de demonstração pronto ANTES de submeter
3. O app precisa estar configurado como "Call Screening App" padrão para funcionar
4. Todas as permissões são usadas para a função principal (bloqueio de chamadas)
