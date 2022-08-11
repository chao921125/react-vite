import JSEncrypt from "jsencrypt";

const PUB_KEY = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj10qRAuGxuUANapRD5rF
  /M5AGX5iWj7e12OCdW2yEJueUUcLCEKv1SCw6mE/o6/OnBcCeD6IAt0nkIPcXzg1
  j1dduyQpqcX5gZrXlD1lC4xqMABDcqBSjYW33L91j9/bI9pbPMlnULo8YyC4Rjqz
  xm1mV6sAjltLGdT9lXR5ggq6h1h2RN6/xhLCvR1/Ew1ZvrjOUbfCgcTtzjiaaUvc
  2HbMyCHCfqOv4vFG4kFpvHrP/Rt0Wu8zVd9F7PMo1OyOLnXxH+4ANGMbd45RTq/A
  7Rg0kbFAwVwfvyT55z2HNJECwV81nau24K/HsutHjKowuMtU7g8+BSCs5sNGNEhS
  9QIDAQAB
  -----END PUBLIC KEY-----`;
const PRIV_KEY = `
    -----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCpJS099jbPf99f
+KELeTBJ0J8g/vTqA4ifeOGH58UJMLMsw23favTdsE5Fza5e6m+qeLplsp7MKf2o
CWYZjFvPndU0+HxjGOdE64gAFttGNAJYm5OsJUagCvkmr639X9S8RzHIOV7YFTAY
pvxPGNJkLVRA9Xb4Fw1VypsLNW34Y3QyJIBG3TIYkrn4qAI9+x0jnmwL6N2RhlkZ
piisjtbcBuoXmNRcjvxo6kHyuqHDJZDRKF1w42jeRXQdteT61TrGmh22d2V6FMHN
3xQmRdJdQSwCOjk7PQQ6aoPyCBy3ZzWP2L94EydH/hOpOjNhGHICS46OFQdlK36o
bmd+o58HAgMBAAECggEBAJ+rsputU2xpv8nvAMe97TGhOLaDN1u5Xj18dRpAViYo
zNtS2ONxKhokFp+aXCLJmAQK15qtFW6RrRv1U2aGsxy4V84bTACYP6k11jqPWQta
iWRv6OU2gwcNlMlKSirHTiE16+6hCcFdrvt2lvNr8SAUElcH4Pitei8khVv9YgR5
BRKUvexJKVLOVzyD+aQBlYjRs6ZfjDJQhkwaKevS/yhLF97LMBKPUjtfV0TZuB6i
OIjfywwltUL9sXMmjA5hT8lfEMuXtoCvV4tOtxP4kdXgSijjWp4refbd/agZDyMG
mHBopTQdDpCRDM6duHxgcnTSwB1NPpsO3u2Y+JU7/gECgYEA0cosxxqLcqmBMckP
xVWbn/kex8Ko7OFsuYOAoHfbS9RaDOLHgg0EVXac2HBrsYQJ+UXw7sbwy1TdA3sD
AwkIkpxROPbBAFQS0XzBZxRSksIk1k+iQ5SSkxcqO1Adg01rKgZDOI6iqc9t9UcZ
dZiWVMXoxKSTkZWPq0fyglA+YIECgYEAzmcZdllNi5OuxD/NYI1j8XubKEdqc45b
JluXpAm2Vhd2+G0n7P9f/p56H9xMBXTROktMzRWdXgQUFNXPoNVy2pZ0x70rbud3
g6SFFzsutCVgYSWMbudqm+XrEGfCIg7RWgW8RLFeZ4QzVu8sOUsKfXrdRNfIATn0
8xBGG+0BO4cCgYAan5qxJdg+k+5WYBrFQ0j9s0LJvRVtAmqm3F5tfuhwpiFLc1g4
U+iR4/yhpxqzq3sMjGi4FL0oQLvPnkPSlcnluTrBjOcPYJwGw9tTdovIHiVIoVCJ
XQiA7Daq0k78g82uxp6vRcK05CMjNoOvnc6uMXOJyQ0FM8LIzNek3AQegQJ/TJf1
2vVI0YL8V9dVX38Yl4RHD6tw1XD+Yj2bCESSZWBPxeC78DbUaKhmqWwWye+PtRI8
bd6Xh0v8J78wTX7oIDW1IGoStBUxRKjIutY7fp5gJazJcF5wMWog0PWwFPNqvP1j
4Bnx7ngglSIsRxaRzf7KHcH1dn8LZyei3LoWuwKBgQC+B0fg8oVrfasqW50qu9J+
zfeo7WShejJccVXs0L7b+z8LPJHs4sIS5K/RyatjIo+HMfcAhkvsDVWCZ7IFlYoR
UILxpU2MQwEYOqRAhrvKSxCkudCpJzGzLlXLAM0mmw8CrGNsMExElE5MNkCT4FCx
qEVJCjKJk7UqCQDNJJYIBg==
-----END PRIVATE KEY-----
`;

export default {
	encrypt: (text: string) => {
		const encrypt = new JSEncrypt();
		encrypt.setPublicKey(PUB_KEY);
		const encrypted = encrypt.encrypt(text);
		return encrypted.toString();
	},
	decrypt: (text: string) => {
		const decrypt = new JSEncrypt();
		decrypt.setPrivateKey(PRIV_KEY);
		const decrypted = decrypt.decrypt(text);
		return decrypted.toString();
	},
};
