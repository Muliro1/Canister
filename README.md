Install dfx using DFX_VERSION=0.14.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
Add it to your PATH variables using echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
Next, run dfx start --background
Then run dfx deploy. It will take a while
A link will be generated. Go to that link and test all the functions