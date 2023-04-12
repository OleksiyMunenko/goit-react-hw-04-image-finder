import { Component } from "react";


export default class Searchbar extends Component {
	state = {
		value: '',
	}

	handlChange = ({target:{ value }}) => {
		this.setState({ value })
	 }

	handelSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state.value)
	}

	render() {
		return (
			<header className="searchbar">
				<form className="form" onSubmit={this.handelSubmit}>
					<button type="submit" className="button">
						<span className="button-label">Search</span>
					</button>

					<input
						className="input"
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						onChange={this.handlChange}
						value={this.state.value}
					/>
				</form>
			</header>
		)
	}
}