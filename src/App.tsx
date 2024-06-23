import { useState } from "react";
import "./styles/main.scss";

function App() {
  const [informations, setInformations] = useState<{ surname?: string; lastname?: string; age?: string; country?: string; job?: string }>({});
  const [test, setTest] = useState<{ surname?: string; lastname?: string; age?: string; country?: string; job?: string }>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: { [key: string]: unknown } = {};
    
    for (const [key, value] of formData) {
      data[key as string] = value.toString();
    }

    setInformations({
      surname: data.surname as string,
      lastname: data.lastname as string,
      age: data.age as string,
      country: data.country as string,
      job: data.job as string
    });

    setTest({})
    form.reset();
  }

  return (
    <>
      <div className="h1-div">
        <h1>Typescript and Sass Test</h1>
      </div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="h1-1">Surname:</legend>
            <input type="text" name="surname" placeholder="Surname" required onChange={(e) => setTest({ ...test, surname: e.target.value })} />
          </fieldset>
          <fieldset>
            <legend className="h1-2">Lastname:</legend>
            <input type="text" name="lastname" placeholder="Lastname" required onChange={(e) => setTest({ ...test, lastname: e.target.value })} />
          </fieldset>
          <fieldset>
            <legend className="h1-3">Age:</legend>
            <input type="text" name="age" placeholder="Your Age" required onChange={(e) => setTest({ ...test, age: e.target.value })} />
          </fieldset>
          <fieldset>
            <legend className="h1-4">Country:</legend>
            <input type="text" name="country" placeholder="Which Country you live" required onChange={(e) => setTest({ ...test, country: e.target.value })} />
          </fieldset>
          <fieldset>
            <legend className="h1-5">Job:</legend>
            <input type="text" name="job" placeholder="Your Job" required onChange={(e) => setTest({ ...test, job: e.target.value })} />
          </fieldset>
          <button disabled={!test.surname || !test.lastname || !test.age || !test.country || !test.job} style={{backgroundColor: !test.surname || !test.lastname || !test.age || !test.country || !test.job ? "transparent" : ""}} type="submit">Submit</button>
        </form>
      </div>
      <div className="your-informations">
      <button disabled={Object.keys(informations).length > 0 ? false : true} style={{backgroundColor:Object.keys(informations).length > 0 ? "" : "transparent"}} onClick={() => setInformations({})}>Delete</button>
        <p>
          {Object.keys(informations).length > 0
            ? `Welcome ${informations.surname} ${informations.lastname}, You live in ${informations.country} and your age is ${informations.age}. And you work currently as a ${informations.job}!`
            : "No informations yet!"}
        </p>
      </div>
    </>
  );
}

export default App;
