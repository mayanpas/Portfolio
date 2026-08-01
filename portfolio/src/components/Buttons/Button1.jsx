export default function Button1({id, acao, icon, label}) {
  return <a className="button1" id={id} href={acao} target="_blank">{icon}{label}</a>;
}

