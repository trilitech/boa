window.BENCHMARK_DATA = {
  "lastUpdate": 1698769235304,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc9b6baba7acc8fba498d889790b21bf268cc9c5",
          "message": "Bump arbitrary from 1.3.1 to 1.3.2 (#3446)\n\nBumps [arbitrary](https://github.com/rust-fuzz/arbitrary) from 1.3.1 to 1.3.2.\n- [Changelog](https://github.com/rust-fuzz/arbitrary/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/rust-fuzz/arbitrary/compare/derive_arbitrary@1.3.1...v1.3.2)\n\n---\nupdated-dependencies:\n- dependency-name: arbitrary\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-31T13:29:53Z",
          "tree_id": "352eb82c5ce07cfed1a09aa94362db5d2d037ebf",
          "url": "https://github.com/trilitech/boa/commit/cc9b6baba7acc8fba498d889790b21bf268cc9c5"
        },
        "date": 1698769231208,
        "tool": "cargo",
        "benches": [
          {
            "name": "Create Realm",
            "value": 267702,
            "range": "± 1943010",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Parser)",
            "value": 6414,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Parser)",
            "value": 21945,
            "range": "± 126811",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Parser)",
            "value": 25331,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Parser)",
            "value": 13404,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Parser)",
            "value": 14278,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Parser)",
            "value": 15785,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Parser)",
            "value": 14227,
            "range": "± 30902",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Parser)",
            "value": 12086,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Parser)",
            "value": 16559,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Parser)",
            "value": 14547,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Parser)",
            "value": 17658,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Parser)",
            "value": 21816,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Parser)",
            "value": 205539,
            "range": "± 7146",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Parser)",
            "value": 11164,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Parser)",
            "value": 18027,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Parser)",
            "value": 9564,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Parser)",
            "value": 17230,
            "range": "± 1176",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Parser)",
            "value": 19969,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Parser)",
            "value": 18546,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Parser)",
            "value": 10106,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Parser)",
            "value": 45916,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Parser)",
            "value": 40376,
            "range": "± 370",
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
            "value": 7,
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
            "value": 7,
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
            "value": 7,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Symbols (Execution)",
            "value": 1530,
            "range": "± 9164",
            "unit": "ns/iter"
          },
          {
            "name": "For loop (Execution)",
            "value": 16341,
            "range": "± 59542",
            "unit": "ns/iter"
          },
          {
            "name": "Fibonacci (Execution)",
            "value": 667145,
            "range": "± 1830086",
            "unit": "ns/iter"
          },
          {
            "name": "Object Creation (Execution)",
            "value": 1856,
            "range": "± 7450",
            "unit": "ns/iter"
          },
          {
            "name": "Static Object Property Access (Execution)",
            "value": 2071,
            "range": "± 7151",
            "unit": "ns/iter"
          },
          {
            "name": "Dynamic Object Property Access (Execution)",
            "value": 2184,
            "range": "± 6944",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal Creation (Execution)",
            "value": 6076,
            "range": "± 13783",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Creation (Execution)",
            "value": 6666,
            "range": "± 12771",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp Literal (Execution)",
            "value": 13353,
            "range": "± 13483",
            "unit": "ns/iter"
          },
          {
            "name": "RegExp (Execution)",
            "value": 14235,
            "range": "± 20574",
            "unit": "ns/iter"
          },
          {
            "name": "Array access (Execution)",
            "value": 5836,
            "range": "± 38436",
            "unit": "ns/iter"
          },
          {
            "name": "Array creation (Execution)",
            "value": 834384,
            "range": "± 1982361",
            "unit": "ns/iter"
          },
          {
            "name": "Array pop (Execution)",
            "value": 366284,
            "range": "± 11432",
            "unit": "ns/iter"
          },
          {
            "name": "String concatenation (Execution)",
            "value": 2066,
            "range": "± 9472",
            "unit": "ns/iter"
          },
          {
            "name": "String comparison (Execution)",
            "value": 3010,
            "range": "± 8783",
            "unit": "ns/iter"
          },
          {
            "name": "String copy (Execution)",
            "value": 1801,
            "range": "± 12413",
            "unit": "ns/iter"
          },
          {
            "name": "Number Object Access (Execution)",
            "value": 4250,
            "range": "± 5701",
            "unit": "ns/iter"
          },
          {
            "name": "Boolean Object Access (Execution)",
            "value": 4857,
            "range": "± 9520",
            "unit": "ns/iter"
          },
          {
            "name": "String Object Access (Execution)",
            "value": 7693,
            "range": "± 9453",
            "unit": "ns/iter"
          },
          {
            "name": "Arithmetic operations (Execution)",
            "value": 587,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "Clean js (Execution)",
            "value": 648807,
            "range": "± 462649",
            "unit": "ns/iter"
          },
          {
            "name": "Mini js (Execution)",
            "value": 634783,
            "range": "± 11391",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}