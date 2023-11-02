<script>
    let data = [
      {
        EFL: 1,
        ESL: 0,
        Maths: 1,
        AMaths: 1,
        Chemistry: 0,
        Physcis: 1,
        Biology: 0,
        Business: 0,
        Ict: 1,
        CS: 1,
        Grammar: 1,
      },
    ];
  
    const hasYesClass = (subject) => {
      return data[0][subject] === 1 ? 'yes' : '';
    };
  </script>
  
  <table class="md:w-[145em] md:h-[25em] md:text-sm text-[0.5rem]">
    <tr class="md:text-lg font-AHSR">
      <th>Time/Day</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
    </tr>
    <tr class="font-mono text-center">
      <td>9:00 AM - 10:30 AM</td>
      <td class={hasYesClass('ESL')}>ESL</td>
      <td class={hasYesClass('AMaths')}>A Maths</td>
      <td class={hasYesClass('Chemistry')}>Chemistry</td>
      <td class={hasYesClass('Grammar')}>Grammar</td>
      <td class={hasYesClass('ESL')}>ESL</td>
      <td class={hasYesClass('CS')}>CS</td>
    </tr>
    <tr class="font-mono text-center">
      <td>10:30 AM - 12:00 PM</td>
      <td class={hasYesClass('Chemistry')}>Chemistry</td>
      <td class={hasYesClass('Maths')}>Maths</td>
      <td class={hasYesClass('AMaths')}>A Maths</td>
      <td class={hasYesClass('Business')}>Business</td>
      <td class={hasYesClass('Business')}>Business</td>
      <td class={hasYesClass('Ict')}>ICT</td>
    </tr>
    <tr class="font-mono text-center">
      <td>12:00 PM - 12:30 PM</td>
      <td colspan="6">Break Time</td>
    </tr>
    <tr class="font-mono text-center">
      <td>12:30 PM - 2:00 PM</td>
      <td class={hasYesClass('Physcis')}>Physcis</td>
      <td class={hasYesClass('Chemistry')}>Chemistry</td>
      <td class={hasYesClass('Ict')}>ICT</td>
      <td class={hasYesClass('Ict')}>ICT</td>
      <td class={hasYesClass('AMaths')}>A Maths</td>
      <td class={hasYesClass('Physcis')}>Physcis</td>
    </tr>
    <tr class="font-mono text-center">
      <td>2:00 PM - 3:30 PM</td>
      <td class={hasYesClass('Maths')}>Maths</td>
      <td class={hasYesClass('Business')}>Business</td>
      <td class={hasYesClass('Maths')}>Maths</td>
      <td class={hasYesClass('CS')}>CS</td>
      <td class={hasYesClass('Physcis')}>Physcis</td>
      <td class={hasYesClass('Self-Study')}>Self-Study</td>
    </tr>
    <tr class="font-mono text-center">
      <td>3:30 PM - 5:00 PM</td>
      <td class={hasYesClass('EFL')}>EFL</td>
      <td class={hasYesClass('Self-Study')}>Self-Study</td>
      <td class={hasYesClass('ESL')}>ESL</td>
      <td class={hasYesClass('EFL')}>EFL</td>
      <td class={hasYesClass('Self-Study')}>Self-Study</td>
      <td class={hasYesClass('Self-Study')}>Self-Study</td>
    </tr>
  </table>
  
  <style>
    table,
    th,
    td {
      border: 1px solid;
      border-color: #333;
    }
  
    .yes {
      color: #171717;
      background-color: #ededed;
    }
  </style>
  