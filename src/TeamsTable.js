
function getValues() {
  const firstName = document.querySelector("input[name=firstName]").value;
  const lastName = document.querySelector("input[name=lastName]").value;
  const gitHub = document.querySelector("input[name=gitHub]").value;

  const person = {
      firstName,
      lastName,
      gitHub: gitHub
  };
  return person;
}

export const PersonsTable = ({ persons, border, onSubmit}) => (
  <form onSubmit={e => {
      e.preventDefault();
      const values = getValues();
      onSubmit(values);
  }}>
      <table id="list" border={border}>
          <thead>
              <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Links</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {persons.map((person, index) => (
                  <tr key={index}>
                      <td>{person.firstName}</td>
                      <td>{person.lastName}</td>
                      <td><a target="_blank" href={person.gitHub}>Github</a></td>
                      <td>
                          <a href="#" className="delete-row" data-id="{person.id}">&#10006;</a>
                          <a href="#" className="edit-row" data-id="{person.id}">&#9998;</a>
                      </td>
                  </tr>
              ))}
          </tbody>
          <tfoot>
              <tr>
                  <td><input type="text" required name="firstName" placeholder="Enter first name" /></td>
                  <td><input type="text" required name="lastName" placeholder="Enter last name" /></td>
                  <td><input type="text" required name="gitHub" placeholder="GitHub account" /></td>
                  <td>
                      <button type="submit" id="add-member">Save</button>
                  </td>
              </tr>
          </tfoot>

      </table>
  </form>
);