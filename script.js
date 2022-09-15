function gerarQrCode (){
    let inputTextArea = document.querySelector('textarea').value;
    let googleApi = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=';//depis do sinal de igual vai ser inserido o valor do texto QR
    let conteudoApi = googleApi + encodeURIComponent(inputTextArea);
    document.querySelector('#qrCodeImagem').src = conteudoApi;
}