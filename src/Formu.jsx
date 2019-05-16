import React, { Component } from 'react';

class Formu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			globalTitle: ''
		};
		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	componentDidMount() {
		console.log('Formulaire rendu');
	}

	componentDidUpdate() {
		console.log('Titre changé');
	}

	onChange(e) {
		this.setState({
			title: e.target.value
		});
	}

	submitForm(e) {
		this.setState({
			globalTitle: 'Mon formulaire -' + this.state.title
		});
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<fieldset>
						<legend>{this.state.globalTitle}</legend>
						<div>
							<label htmlFor='title'>Title</label>
							<input type='text' id='title' name='title' onChange={this.onChange} value={this.state.title} />
						</div>

						<hr />
						<div>
							<input type='submit' value='Envoyer' />
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default Formu;
