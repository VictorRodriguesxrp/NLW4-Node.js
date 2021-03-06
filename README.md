# NLW4-Node.js
<div>
<hr>
<h4>
  Application developed during the Rocketseat NLW-04. It consists of a server for sending satisfaction surveys by e-mail and calculating the nps at the end of the survey.
</h4>

<h1> Installing <h1>
<hr>

<pre>
<code> $ yarn
</code>
</pre>

<p> Or: </p>

<pre>
<code> $ npm install
</code>
</pre>

<h1> Configuring <h1>
<hr>
<p>
  The application use: 
  <a href="https://www.sqlite.org/index.html" rel="nofollow">SQLite</a>
</p>
 <p>
  The application use: 
  <a href="https://typeorm.io/#/using-ormconfig" rel="nofollow">SQLite</a>
</p>
  
<h2> Migrations </h2>
<h3> Run the database migrations: </h3>

<pre>
<code> $ yarn typeorm migration:run
</code>
</pre>

<h1> Usage <h1>
<hr>
<h3> To start up the app run:
<br>
<pre>
<code> $ yarn dev
</code>
</pre>

<p> Or: </p>

<pre>
<code> $ npm run dev
</code>
</pre>

<h1> Routes <h1>
<hr>
  
  <table>
  <thead>
    <tr>
      <th align = "left"> route </th>
      <th align = "center"> HTPP Method </th>
      <th align = "center"> params </th>
      <th align = "center"> description </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">
        <code>/users</code>
      </td>
      <td align="center">POST</td>
      <td align="center">
        Body with user 
        <code>name</code>
         and 
        <code>email</code>
      </td>
      <td align="center"> Create a new user </td>
     </tr>
     <tr>
        <td align="left">
        <code>/surveys</code></td>
        <td align="center">GET</td>
        <td align="center">-</td>
        <td align="center">Lists surveys.</td>              
     </tr>
     <tr>
       <td align="left">
         <code>/surveys</code>
       </td>
       <td align="center">POST</td>
       <td align="center">
         Body with user 
         <code>title</code>
         and 
         <code>description</code>
       </td>
       <td align="center"> Create a new survey </td>
      </tr>
      <tr>
       <td align="left">
         <code>/send_mail</code>
       </td>
       <td align="center">POST</td>
       <td align="center">
         Body with user 
         <code>email</code>
         and a
         <code>survey_id</code>
       </td>
       <td align="center"> Send the NPS to Provided user </td>
      </tr>
      <tr>
       <td align="left">
         <code>/answers</code>
       </td>
       <td align="center">GET</td>
       <td align="center">
       -
       </td>
       <td align="center"> List survey answers </td>
      </tr>
      <tr>
       <td align="left">
         <code>/answers/:value</code>
       </td>
       <td align="center">GET</td>
       <td align="center">
         survey 
         <code>value</code>
         url parameter and survey user
         <code>id</code>
         query parameter.
       </td>
       <td align="center"> Set user's avaliation to one survey </td>
      </tr>
      <tr>
       <td align="left">
         <code>/nps/:survey_id</code>
       </td>
       <td align="center">GET</td>
       <td align="center">
         <code>survey_id</code>
         url parameter.
       </td>
       <td align="center"> Show survey NPS </td>
      </tr>
  </tbody>
  </table


<h1> Running the tests <h1>
<hr>
<p>
  The application use: 
  <a href="https://jestjs.io/" rel="nofollow">Jest</a>
</p>
<br>
<pre>
<code> $ yarn test
</code>
</pre>

<p> Or: </p>

<pre>
<code> $ npm run test
</code>
</pre>
<div>
