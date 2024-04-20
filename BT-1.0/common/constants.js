import {v4 as uuid_v4} from 'uuid'
export const HOME_PAGE_CONTENT = `You have probably guessed my name from the title but let me introduce myself.
My name is Boris - young and ambitious individual strongly passionate about 

Web-Development 

Open-Source 

and...

pretty much everything Tech 🦾
`;

export const INSTRUCTION_PAGE_CONTENT = `Hello there \u{1F44B}\n Before you begin I highly advice you to grab yourself ✏️ and 📄 (you will thank me later)😁
The main purpose of the application is helping new developers to understand the idea behind Binary Tree Data Structure 
(by simulating insertion,visual representation of your very own \u{1F333}),
if that is something completely new to you, don't worry check out the About section for more details.\n
By navigating to the ▶️ button located in the bar above, you can already see that I have set you up.
Unfortunately your \u{1F333} look quite empty 😅 but that is not an issue.\nSimply press the Start button to begin.\n
❗ Flow of program :\n
1. Recursive algorithm will fire up, asking you to insert left and right child respectively.\n
2. Note that this tree is not generic, any input apart from an integer number will not be accepted.\n
3. Once you are ready to see the result, press the Return button.At first you might not see what you have expected,
but don't worry use that drag and drop functionality to assemble the structure.
`;


export const ABOUT_PAGE_CONTENT = `A Binary Tree Data Structure is a hierarchical data structure 
in which each node has at most two children, referred to as the left child and the right child.
It is commonly used in computer science for efficient storage and retrieval of data, 
with various operations such as insertion, deletion, and traversal.\nTypes of Binary Trees\n
•A Rooted Binary Tree has a root node and every node has at most two children.\n
•A Full Binary Tree is a tree in which every node has either 0 or 2 children.\n
•Nothing in life is perfect but the Perfect Binary Tree \u{1F60A} in which all interior
 nodes have two children and all leaves have the same depth or same level 
(the level of a node defined as the number of edges or links from the root node to a node)\n.
•A complete binary tree is a binary tree in which every level, except possibly the last,
is completely filled,and all nodes in the last level are as far left as possible.\n
•A Balanced Binary Tree is a binary tree structure in which the left and right subtrees 
of every node differ in height by no more than 1.
Additional \u{2B07}\u{FE0F} Information`;


export const ERROR_PAGE_CONTENT = `Oops it seems like your tree is quite empty 🥺
Please try again !`

export const DRAGGABLE_DROPPABLE_STYLES = {
display: "relative",
width: "auto",
height: "auto",
backgroundColor: "undefined"  

};

export const INITIAL_NODE = {
    id : uuid_v4(),
    value: 100,
    left: null,
    right: null,
    position :{
      x: 0,
      y: 0
    }
}

export const APPLICATION_TITLE =  'Boris Binary Tree Simulator';

export const ADDITIONAL_RESOURCES_OBJ = {
  wiki : 'https://en.wikipedia.org/wiki/Binary_tree#:~:text=In%20computer%20science%2C%20a%20binary,ary%20tree%20with%20k%20%3D%202.',
  w3school: 'https://www.w3schools.com/dsa/dsa_data_binarytrees.php'
}

export const MY_SOCIAL_MEDIA_OBJ = {
  github : 'https://github.com/BorisNeykov1202',
  linkedin : 'https://www.linkedin.com/in/boris-neykov/',
  emailMe : 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bobineikov@gmail.com'
}
