1. Testar a página inicial:
curl http://127.0.0.1:3000/
2. Testar a página Sobre:
curl http://127.0.0.1:3000/about
3. Upload de arquivo:
curl -X POST -F "file=@./public/about.html" http://localhost:3000/submit
Ou então C:\Windows\System32\curl.exe -X POST -F "file=@./public/about.html" http://localhost:3000/submit
