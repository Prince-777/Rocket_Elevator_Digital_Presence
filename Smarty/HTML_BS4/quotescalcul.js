

<body>

       <select  id="list" onchange="getSelectValue()">
           <option value="js">Javascrispt</option>
           <option value="php">PHP</option>
           <option value="C#">Csharp</option>
           <option value="Java">Java</option>
           <option value="node">Node.js</option>
        </select>
<script>

        function getSelectValue() {

          var SelectedValue = document.getElementById("list")value;
          console.log(SelectedValue);
            
        }

</script>


</body>       