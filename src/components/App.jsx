import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';


export class App  extends Component {
	state = {
		searchText: ''
	}
  
	createSearchText = (searchText) => {
		this.setState({searchText})
	}

	render() {
		return (
			<>
				<Searchbar onSubmit={this.createSearchText}/>
			</>
		)
	}

};
