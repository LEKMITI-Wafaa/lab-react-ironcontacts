import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import { render } from 'react-dom';

export default class App extends React.Component {
	state = {
		contactsOnPage: contacts.slice(0, 5)
	};

	 addNewContact = () =>{
		const randomNumber = Math.floor(Math.random()*contacts.length);
		const randomContact = contacts[randomNumber];
		this.setState({
			
		})
		
	}

	render() {
		return (
			<div>
				<div>
					<h2>IronContacts</h2>
					<button onClick={this.addNewContact}>Add Random Contact</button>
					<table>
						<thead>
							<tr>
								<th>Picture</th>
								<th>Name</th>
								<th>Popularity</th>
							</tr>
						</thead>
						<tbody>
							{this.state.contactsOnPage.map(contact => (
								<tr key={contact.id}>
									<td>
										<img src={contact.pictureUrl} alt=""/>
									</td>
									<td>{contact.name}</td>
									<td>{contact.popularity}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

  );
	}
}
