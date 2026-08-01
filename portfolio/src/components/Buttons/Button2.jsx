export default function Button1({id, acao, icon, label}) {
  return <button className="button1" id={id} onClick={acao}>{icon}{label}</button>;
}

