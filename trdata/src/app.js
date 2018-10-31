const {TextInput,Button,TextView,Composite,ui}=require('tabris');

// Create a text input field with input finished listener

let obj_str=new TextInput({
  top: 20, left: '20%', right: '20%',
  message: 'Type here, then confirm'
}).on('accept', ({text}) => {
    let com=new Composite({
    top: 'prev() 4', left: 8, right: 8,
    height: 48
  }).appendTo(ui.contentView);
    new TextView({
    top:8,
    left: '20%',
    text: text+' '+printDate()
}).appendTo(com);
}).appendTo(ui.contentView);
function printDate(){
    let date=new Date();
    return date.getHours()+':'+date.getMinutes();
}
new Button({
  top: 'prev() 5', left: '20%', 
  text: 'Task'
}).on('select', () => {
    let comp=new Composite({
    top: 'prev() 4', left: 8, right: 8,
    height: 48,
    background: '#a5e2d9'
  }).appendTo(ui.contentView);
    let zad=new TextView({
    top:8,
    left: '20%', 
    text: obj_str.get('text')+' '+printDate()
  }).appendTo(comp);
    let btn=new Button({
    top:0,
    right: 10, height: 48,
    text: 'Stop'
}).on('select',()=>{
    zad.text+='-'+printDate();
    comp.background='white';
    btn.dispose();
}
).appendTo(comp);}).appendTo(ui.contentView);

