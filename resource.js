document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");
    const languageList = document.getElementById("language-list");

    // Original Java code snippets
    // const originalJavaCode = {
    //     "Inverted Star Pattern": `public class Program {\n    public static void main(String[] args) {\n        for(int i=5;i >=1;i--) {\n            for(int j=1;j<=i;j++) {\n                System.out.print('*');\n            }\n            System.out.print("\\n");\n        }\n    }\n}`,
    //     "Half Star Pattern": `public class Program {\n    public static void main(String[] args) {\n        for(int i=1;i<=5;i++) {\n            for(int j=1;j<=i;j++) {\n                System.out.print('*');\n            }\n            System.out.print("\\n");\n        }\n    }\n}`,
    //     // Add other patterns here...
    // };
 const originalJavaCode = {
        "Inverted Star Pattern": `public class Program {\n    public static void main(String[] args) {\n        for(int i=5;i >=1;i--) {\n            for(int j=1;j<=i;j++) {\n                System.out.print('*');\n            }\n            System.out.print("\\n");\n        }\n    }\n}`,
        "Half Star Pattern": `public class Program {\n    public static void main(String[] args) {\n        for(int i=1;i<=5;i++) {\n            for(int j=1;j<=i;j++) {\n                System.out.print('*');\n            }\n            System.out.print("\\n");\n        }\n    }\n}`,
              "Floyd's Triangle":`public class Program<br> {<br>    public static void main(String[] args) {<br>         int k=1;<br>         for(int i=1; i&lt;=4;i++) {<br>             for(int j=1; j<=i; j++) {<br>                 System.out.print(k++);<br>             }<br>             System.out.print("\\n");<br>         }<br>     }<br> }<br> `,
             "Half Pyramid With Numbers":` public class Program <br>
        { <br>&nbsp;&nbsp;public static void main(String[] args) { <br>&nbsp;&nbsp;&nbsp;&nbsp;for(int i=1;i&lt;=5;i++) { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1;j&lt;=i;j++) { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j); <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("\\n"); <br>&nbsp;&nbsp;&nbsp;&nbsp;} <br>&nbsp;&nbsp;} <br>
        } <br>`,
            "Inverted Half Pyramid With Numbers": ` public class Program <br>
        { <br>
            &nbsp;&nbsp;public static void main(String[] args) { <br>
            &nbsp;&nbsp;&nbsp;&nbsp;for(int i=5;i&gt;=1;i--) { <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1;j&lt;=i;j++) { <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j); <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("\n"); <br>
            &nbsp;&nbsp;&nbsp;&nbsp;} <br>
            &nbsp;&nbsp;} <br>
        } <br>`,
            "Full Pyramid With Numbers":` import java.util.*; <br>
        <br>
        public class Solutions { <br>
        &nbsp;&nbsp;public static void main(String args[]) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;int n = 5; <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;for(int i=1; i&lt;=n; i++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//spaces <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=n-i; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(" "); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//numbers <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=i; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(i+" "); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;} <br>
        } <br>
        
        ` ,
            "Rhombus Pattern Using Stars": ` import java.util.*; <br>
        <br>
        public class Solutions { <br>
        &nbsp;&nbsp;public static void main(String args[]) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;int n = 5; <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;for(int i=1; i&lt;=n; i++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//spaces <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=n-i; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(" "); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//stars <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=n; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("*"); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br> &nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;} <br>
        } <br>`,
           "Double Sided Number Pyramid":` import java.util.*; <br>
        <br>
        public class Solutions { <br>
        &nbsp;&nbsp;public static void main(String args[]) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;int n = 5; <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;for(int i=1; i&lt;=n; i++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//spaces <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=n-i; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(" "); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//first part <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=i; j&gt;=1; j--) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//second part <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=2; j&lt;=i; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;} <br>
        } <br>
         `,
            "Half Pyramid Pattern Using 0 and 1":` public class Program <br>
        { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int n=5; <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int i=1;i&lt;=n;i++){ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1;j&lt;=i;j++){ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if((i + j )% 2 == 0) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("1"); <br>        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("0"); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("\n"); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} <br>
        } <br>`,
           "Square or Rectangle Pattern Using Stars" :`        public class Program <br>
        { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int i=1;i&lt;=5;i++){ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1;j&lt;=5;j++){ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print('*'); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("\n"); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} <br>
        } <br>`,
           "Star Diamond Pattern":` import java.util.*; <br>
        <br>
        public class Solutions { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String args[]) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int n = 5; <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//upper part <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int i=1; i&lt;=n; i++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//spaces <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=n-i; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(" "); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=2*i-1; j++) { <br>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("*"); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//lower part <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int i=n; i&gt;=1; i--) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//spaces <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=n-i; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(" "); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1; j&lt;=2*i-1; j++) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("*"); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} <br>
        } <br>`,
            "Square or Rectangle Outline Pattern Using Stars":` public class Program <br>
        { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) { <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int m=5,n=4; <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int i=1;i&lt;=m;i++){ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int j=1;j&lt;=n;j++){ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(i==1 ||i==m || j==1 || j==n ){ <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("* "); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("   "); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("\n"); <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} <br>
        } <br>`,
           "Addition Sign Using Pattern Printing": `
public&nbsp;class&nbsp;Main&nbsp;{

&nbsp;&nbsp;public&nbsp;static&nbsp;void&nbsp;main(String[]&nbsp;args)&nbsp;{

&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;i=0;i&lt;5;i++)&nbsp;{

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(int&nbsp;j=0;j&lt;5;j++)&nbsp;{

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(i==2||j==2)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("*&nbsp;");
<br >

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("&nbsp;");<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("\n");<br>

&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;

&nbsp;&nbsp;}<br>&nbsp;

}
`
            
            
        // Add other patterns here...
    };
    // Code snippets mapping for other languages
    const codeSnippets = {
       python: {
            "Inverted Star Pattern": `for i in range(5, 0, -1):\n    print('*' * i)`,
            "Half Star Pattern": `for i in range(1, 6):\n    print('*' * i)`,
            "Floyd's Triangle":`def main():
    k = 1
    for i in range(1, 5):
        for j in range(1, i + 1):
            print(k, end="")
            k += 1
        print()

if __name__ == "__main__":
    main()
    `,
            "Half Pyramid With Numbers": `def main():
    for i in range(1, 6):
        for j in range(1, i + 1):
            print(j, end="")
        print()

if __name__ == "__main__":
    main()
    `,
            "Inverted Half Pyramid With Numbers":`def main():
    for i in range(5, 0, -1):
        for j in range(1, i + 1):
            print(j, end="")
        print()

if __name__ == "__main__":
    main()
    ` ,
            "Full Pyramid With Numbers": `def main():
    n = 5
    for i in range(1, n + 1):
        # spaces
        for j in range(n - i):
            print(" ", end="")
        # numbers
        for j in range(1, i + 1):
            print(i, end=" ")
        print()

if __name__ == "__main__":
    main()
    `,
            "Rhombus Pattern Using Stars": `def main():
    n = 5
    for i in range(1, n + 1):
        # spaces
        for j in range(n - i):
            print(" ", end="")
        # stars
        for j in range(n):
            print("*", end="")
        print()

if __name__ == "__main__":
    main()
    `,
            "Double Sided Number Pyramid":`def main():
    n = 5
    for i in range(1, n + 1):
        # spaces
        for j in range(n - i):
            print(" ", end="")
        
        # first part
        for j in range(i, 0, -1):
            print(j, end="")
        
        # second part
        for j in range(2, i + 1):
            print(j, end="")
        
        print()

if __name__ == "__main__":
    main()
    `,
            "Half Pyramid Pattern Using 0 and 1":`def main():
    n = 5
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            if (i + j) % 2 == 0:
                print("1", end="")
            else:
                print("0", end="")
        print()

if __name__ == "__main__":
    main()
    ` ,
            "Square or Rectangle Pattern Using Stars" :`def main():
    for i in range(5):
        for j in range(5):
            print("*", end="")
        print()

if __name__ == "__main__":
    main()
    `,
            "Star Diamond Pattern":`def main():
    n = 5
    
    # upper part
    for i in range(1, n + 1):
        # spaces
        for j in range(n - i):
            print(" ", end="")
        
        # stars
        for j in range(2 * i - 1):
            print("*", end="")
        
        print()
    
    # lower part
    for i in range(n, 0, -1):
        # spaces
        for j in range(n - i):
            print(" ", end="")
        
        # stars
        for j in range(2 * i - 1):
            print("*", end="")
        
        print()

if __name__ == "__main__":
    main()
    `,
            "Square or Rectangle Outline Pattern Using Stars":`def main():
    m = 5
    n = 4
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if i == 1 or i == m or j == 1 or j == n:
                print("* ", end="")
            else:
                print("   ", end="")
        
        print()

if __name__ == "__main__":
    main()
    `,
            "Addition Sign Using Pattern Printing": `def main():
    for i in range(5):
        for j in range(5):
            if i == 2 or j == 2:
                print("* ", end="")
            else:
                print(" ", end="")
        
        print()

if __name__ == "__main__":
    main()
    `
            
            
            // Add other patterns here...
        },
        javascript: {
            "Inverted Star Pattern": `for (let i = 5; i >= 1; i--) {\n    console.log('*'.repeat(i));\n}`,
            "Half Star Pattern": `for (let i = 1; i <= 5; i++) {\n    console.log('*'.repeat(i));\n}`,
                  "Floyd's Triangle":  `function main() {
    let k = 1;
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(k.toString());
            k++;
        }
        console.log();
    }
}

main();
`,
            "Half Pyramid With Numbers":`function main() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j.toString());
        }
        console.log();
    }
}

main();
`,
            "Inverted Half Pyramid With Numbers":`function main() {
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j.toString());
        }
        console.log();
    }
}

main();
` ,
            "Full Pyramid With Numbers": `function main() {
    const n = 5;
    for (let i = 1; i <= n; i++) {
        // spaces
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        // numbers
        for (let j = 1; j <= i; j++) {
            process.stdout.write(i + " ");
        }
        console.log();
    }
}

main();
`,
            "Rhombus Pattern Using Stars":`function main() {
    const n = 5;
    for (let i = 1; i <= n; i++) {
        // spaces
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        // stars
        for (let j = 1; j <= n; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

main();
` ,
            "Double Sided Number Pyramid":`function main() {
    const n = 5;
    for (let i = 1; i <= n; i++) {
        // spaces
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        
        // first part
        for (let j = i; j >= 1; j--) {
            process.stdout.write(j.toString());
        }
        
        // second part
        for (let j = 2; j <= i; j++) {
            process.stdout.write(j.toString());
        }
        
        console.log();
    }
}

main();
         
