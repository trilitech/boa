window.BENCHMARK_DATA = {
  "lastUpdate": 1698417514806,
  "repoUrl": "https://github.com/trilitech/boa",
  "entries": {
    "Boa Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "8566042+HalidOdat@users.noreply.github.com",
            "name": "Haled Odat",
            "username": "HalidOdat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fee4048b4c48250785f66cb218bca7ab4988e8e6",
          "message": "Merge `CodeBlock` constant pools (#3413)\n\n* Merge `CodeBlock` constant pools\n\n* Apply review",
          "timestamp": "2023-10-26T14:03:31Z",
          "tree_id": "ca6eb2f34643977a830af5a400608dc470060928",
          "url": "https://github.com/trilitech/boa/commit/fee4048b4c48250785f66cb218bca7ab4988e8e6"
        },
        "date": 1698417510420,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 276372,
            "range": "± 1864444",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6242,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 23304,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 25730,
            "range": "± 65620",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 13068,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 14292,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 15512,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 13740,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 12512,
            "range": "± 37546",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 16562,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 14271,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 17587,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 21836,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 205262,
            "range": "± 2646",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 12258,
            "range": "± 41368",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 17872,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 8984,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 16423,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 20581,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 18855,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 9782,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 46293,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 41096,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Compiler)",
            "value": 6,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 1509,
            "range": "± 9486",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 16299,
            "range": "± 59852",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 624153,
            "range": "± 1808877",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 1865,
            "range": "± 7882",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 1979,
            "range": "± 7673",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 2105,
            "range": "± 7012",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 6398,
            "range": "± 13886",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 6568,
            "range": "± 13180",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 12536,
            "range": "± 13607",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 13576,
            "range": "± 20634",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 5784,
            "range": "± 9347",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 825828,
            "range": "± 1164849",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 364872,
            "range": "± 252119",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 1884,
            "range": "± 6405",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 2300,
            "range": "± 8938",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 1507,
            "range": "± 11596",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 3843,
            "range": "± 7151",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 4829,
            "range": "± 7387",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 6769,
            "range": "± 7918",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 590,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 687557,
            "range": "± 1022979",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 631334,
            "range": "± 7153",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}