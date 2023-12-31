import { Code, Header, Section } from '#main'

export default function () {
	return (
		<>
			<Header title="propsPlugin">
				<mark>propsPlugin</mark> and <mark>propsPluginNS</mark> sets a
				custom prop that can be used on any JSX element globally. This
				empowers JSX by allowing you to add custom behaviour via
				props.
			</Header>

			<Section title="Snippet">
				<Code url="/pages/props/plugins/propsPlugin/snippet.jsx"></Code>
			</Section>
		</>
	)
}
