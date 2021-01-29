# Direcional Portal Cliente Frontend Mobile
## Introdução:
Este repositório contem o código para o prototipo do fluxo de autenticação do aplicativo.

## Instruções:
* Login: o aplicativo aceita qualquer login em que o usuário seja o mesmo que a senha, porem somente o usuário com nome e senha A terá acesso ao menu restitivo A e somente o usuário com nome e senha B terá acesso ao menu restritivo B.

* Login Google: Usuário que acessar o app pelo 'Sign in with google' tera acesso ao menu A.

* Login Apple: Como é necessário uma conta de desenvolvedor Apple para configurar o Sign In With Apple, o login com Apple não está funcionando no Android

## Arquitetura:
![Alt Diagrama do sistema](loginmock.png "Title")
* Local: persistência de dados no celular, armazena o token gerado pela API
* Federated: comunicação com as APIs de sign in da google e apple
* Client: cliente da API principal
* Auth: contexto react para gerenciamento da autenticação no app
* Restricted: contexto react para gerenciamento das informações restritas do tipo de usuário
* Telas: conjunto de telas do applicativo
* Components: componentes reutilizáveis do aplicativo
* Styles: armazenamento dos estilos dos componentes e tela do aplicativo
* Strings: armazenamento dos textos do aplicativo
* Layouts: layout visual de cada tela
* Navigation: gerenciamento da navegação entre as telas do aplicativo
* LoadApp: carregamento das informações armazenadas em local para o contexto de autenticação
* Update: gerenciamento de atualizações OTA