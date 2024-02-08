//configurações do frame//
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config); //criação do frame//
var peixinho;

//função que retorna um valor de 1 a 360, que será usado para adicionar um valor aleatório na rotação do peixe//
function cambaleo() {
    return Math.floor(Math.random() *360+1)
}

//carregamento de todas as imagens necessárias//
function preload(){
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('fish', 'assets/peixinho_laranja.png');
    this.load.image('car', 'assets/car.png');
    this.load.image('mega', 'assets/mega.png');
    this.load.image('renato', 'assets/renato.jfif')
}

//adicionar as imagens no frame//
function create (){
    this.add.image(400,300,'mar');
    this.add.image(400,350,'logo').setScale(0.5).setOrigin(2.2,-2);
    this.add.image(400,300,'car').setScale(0.5).setOrigin(0,0);
    this.add.image(400,300, 'mega').setScale(0.2).setOrigin(1,-1.5);
    this.add.image(400,300, 'renato').setScale(0.4).setOrigin(0.5,-0.5);
    peixinho = this.add.image(400,300,'fish').setOrigin(0.5,0.5).setFlip(true,false). setAngle(cambaleo());  //rotação aleatória//
}

//movimento do elemento peixinho//
function update(){
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
