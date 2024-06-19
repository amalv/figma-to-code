import {
	Container,
	LeftCol,
	RightCol,
	Content,
	InputWrapper,
	Label,
	Input,
	Button,
	Title,
	Description,
} from "./Form.styles";

export const Form: React.FC = () => (
	<Container>
		<LeftCol>
			<Content>
				<Title>Got marketing? Advance your business insight.</Title>
				<Description>
					Fill out the form and receive our award winning newsletter.
				</Description>
			</Content>
		</LeftCol>
		<RightCol>
			<Content>
				<InputWrapper>
					<Label htmlFor="name">Name</Label>
					<Input type="text" id="name" />
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor="email">Email</Label>
					<Input type="email" id="email" />
				</InputWrapper>
				<InputWrapper>
					<Button>Sign me up</Button>
				</InputWrapper>
			</Content>
		</RightCol>
	</Container>
);
