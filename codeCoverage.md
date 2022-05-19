## Release 1.5.8
---------------------------------------|---------|----------|---------|---------|-------------------
File                                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------------------|---------|----------|---------|---------|-------------------
All files                              |   44.06 |    31.48 |   40.61 |    45.6 |
 com/eduworks/ec/array                 |   82.14 |    69.23 |     100 |    87.5 |
  EcArray.js                           |   80.85 |    68.18 |     100 |   84.84 | 101-104,115
  EcObject.js                          |   88.88 |       75 |     100 |     100 | 19
 com/eduworks/ec/crypto                |   77.55 |    65.44 |   68.08 |    77.6 |
  EcAes.js                             |     100 |      100 |     100 |     100 |
  EcAesCtr.js                          |   82.35 |    59.09 |     100 |   81.81 | 36,62,75-78
  EcAesCtrAsync.js                     |   88.09 |       68 |     100 |   88.09 | 6-7,11,45,108
  EcAesCtrAsyncWorker.js               |      95 |       80 |     100 |      95 | 34,73
  EcCrypto.js                          |   80.55 |     62.5 |     100 |   80.55 | 35-37,56-58,69
  EcPk.js                              |   74.28 |       75 |      50 |   75.75 | ...,72,85,103-105
  EcPpk.js                             |   63.49 |     62.5 |   46.15 |   61.66 | ...90,115,128,143
  EcPpkFacade.js                       |   15.62 |        0 |       0 |   16.66 | 13-107
  EcRsaOaep.js                         |   77.96 |    60.71 |     100 |   77.96 | ...49,166,171,181
  EcRsaOaepAsync.js                    |   87.17 |    76.92 |   89.47 |   87.17 | ...81,242,294,357
  EcRsaOaepAsyncWorker.js              |   78.98 |     61.9 |   61.11 |   78.67 | ...29-232,261-264
 com/eduworks/ec/graph                 |   40.09 |    32.67 |   28.88 |    44.5 |
  EcDirectedGraph.js                   |    3.66 |        0 |    2.38 |    4.34 | 18-107,114-329
  EcFrameworkGraph.js                  |   77.77 |    67.34 |   86.36 |   83.78 | ...75-383,395-404
  Graph.js                             |     100 |      100 |       0 |     100 |
  Hypergraph.js                        |     100 |      100 |       0 |     100 |
  Triple.js                            |   36.36 |        0 |       0 |      40 | 38-48
 com/eduworks/ec/promises              |   84.21 |    90.62 |     100 |   84.21 |
  helpers.js                           |   84.21 |    90.62 |     100 |   84.21 | 16,23,25
 com/eduworks/ec/remote                |   43.65 |    26.74 |   56.52 |   44.35 |
  EcRemote.js                          |   43.65 |    26.74 |   56.52 |   44.35 | ...32-339,345-350
 com/eduworks/schema/ebac              |   43.72 |     8.33 |   29.16 |   44.01 |
  EbacCredential.js                    |      25 |        0 |       0 |      25 | 15,27-70
  EbacCredentialCommit.js              |   26.66 |        0 |       0 |   26.66 | 17-18,30-83
  EbacCredentialRequest.js             |   26.92 |        0 |       0 |   26.92 | 15,29-67
  EbacCredentials.js                   |      25 |        0 |       0 |      25 | 14,26-69
  EbacEncryptedSecret.js               |   55.55 |    22.22 |      60 |   60.97 | 88-117
  EbacEncryptedValue.js                |   71.79 |    14.28 |      75 |   70.27 | 68-88
  EbacSignature.js                     |   63.15 |      100 |   33.33 |   63.15 | 57-65
 org/cass/competency                   |   16.71 |    12.68 |   11.94 |    17.5 |
  EcAlignment.js                       |   15.25 |    25.64 |    8.33 |   16.98 | ...30,233-235,251
  EcCompetency.js                      |   13.82 |       10 |   14.28 |   14.77 | ...64-366,386-400
  EcFramework.js                       |      20 |    11.22 |   15.38 |   20.33 | ...05-407,423-451
  EcRollupRule.js                      |    12.5 |        0 |       0 |   14.28 | 30-133
 org/cass/profile                      |   10.05 |        7 |   13.09 |   10.14 |
  EcAssertion.js                       |   10.05 |        7 |   13.09 |   10.14 | ...37-640,646-702
 org/cassproject/ebac/identity         |   29.84 |    12.74 |   44.89 |   30.95 |
  EcContact.js                         |     7.4 |        0 |       0 |       8 | 22-114
  EcIdentity.js                        |   31.42 |        0 |      20 |   33.33 | 63-120
  EcIdentityManager.js                 |   32.61 |     17.1 |    60.6 |   33.65 | ...03,528,534-556
  EcRekeyRequest.js                    |   26.66 |        0 |   14.28 |   28.57 | 38-102
 org/cassproject/ebac/identity/remote  |   20.89 |     5.88 |    3.33 |   20.41 |
  EcRemoteIdentityManager.js           |    20.5 |     5.88 |       5 |      20 | 59-517
  RemoteIdentityManagerInterface.js    |     100 |      100 |       0 |     100 |
 org/cassproject/ebac/repository       |   50.92 |    37.34 |   63.28 |   52.06 |
  EcEncryptedValue.js                  |    62.7 |    47.72 |   54.28 |   63.48 | ...73-474,492-557
  EcRepository.js                      |   47.73 |    35.46 |   66.66 |   48.91 | ...1593-1596,1619
 org/cassproject/schema/cass           |     100 |      100 |     100 |     100 |
  Cass.js                              |     100 |      100 |     100 |     100 |
 ...cassproject/schema/cass/competency |   59.47 |    19.64 |   58.33 |   59.47 |
  Competency.js                        |   71.05 |    27.77 |     100 |   71.05 | 36-43,46,49,52,55
  Framework.js                         |   43.58 |        0 |   33.33 |   43.58 | 62-90
  Relation.js                          |   80.85 |     37.5 |     100 |   80.85 | ...31,134,137,140
  RollupRule.js                        |   31.03 |        0 |       0 |   31.03 | 16-17,31-61
 org/cassproject/schema/cass/profile   |   32.46 |      9.3 |   11.42 |   33.33 |
  Assertion.js                         |   32.46 |      9.3 |   11.42 |   33.33 | ...84,287,296-297
 org/cassproject/schema/general        |   42.65 |    33.56 |      50 |   46.98 |
  Ebac.js                              |     100 |      100 |     100 |     100 |
  EcRemoteLinkedData.js                |   41.39 |    33.56 |      50 |   45.57 | ...24,627,645-647
 org/json/ld                           |   56.47 |    47.86 |   84.21 |   56.54 |
  EcLinkedData.js                      |   56.47 |    47.86 |   84.21 |   56.54 | ...43-354,380-388
 org/schema                            |     100 |      100 |     100 |     100 |
  CreativeWork.js                      |     100 |      100 |     100 |     100 |
  Thing.js                             |     100 |      100 |     100 |     100 |
---------------------------------------|---------|----------|---------|---------|-------------------