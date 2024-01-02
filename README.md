# CGE_app_extintor
# Para executar o app é muito simples.
# Acesse o site oficial do Node.js e baixe a versão recomendada para o seu sistema operacional.
# Depois de instalar o node.js, instale tambem o adonis.js seguindo os seguintes passos.
# Abra o terminal e execute o seguinte comando para instalar o Adonis CLI globalmente via npm: 'npm install -g @adonisjs/cli'
# Após a instalação do Adonis.js, crie um servidor no MySQL seguindo as informações que esta no arquivo env.ts na pasta 'CGE_Api'.
# Após criar o servidor, execute o comando 'adonis migration:run' para criar as tabelas no banco de dados.
# Depois popule as tabelas com os seguintes comandos 'adonis seed --files Admin.ts', 'adonis seed --files Empresa.ts' e 'adonis seed --files Tecnico.ts'.
# Por fim, instale o Dart, Flutter e o android Studio para rodar o app.
# Abra a pasta 'CGE_App' procure um arquivo chamado api.dart, ele estará em lib/app/data/provider/api.dart e troque a varialvel 'baseUrl' pelo seu ip da maquina. Ex: final baseUrl = "http://44.203.70.86:3333"; irá substituir pelo seu ip: final baseUrl = "http://192.168.15.101:3333";
# Execute a api primeiro com o seguinte comando 'npm run dev'.
# Depois execute o aplicativo flutter, voce pode emular o device fisico(Seu proprio celular) ou emular um celular no android studio.