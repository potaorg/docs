import { render, signal, toHTML } from 'pota'

function Menu(props) {
	const children = toHTML(props.children)
	console.log(children.childNodes)
	return <ul>{children}</ul>
}

function App() {
	const [read, write] = signal('cuatro')
	return (
		<Menu>
			<li>uno</li>
			<li>dos</li>
			<li>tres</li>
			<li>{read}</li>
			<li>{2 * 2 + 1}</li>
		</Menu>
	)
}

render(App)
