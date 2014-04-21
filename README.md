Feedback Generator
=========================
UI for compiling comments into a single string. You can simply select the comments you have made that are applicable to your current student, and then ask the app to compile everything once you are done. You can also assign point values to comments that are automatically accumulated for each problem.

For each problem...
-------------
Each problem is a tab. The default is 9 tabs (1 tab per problem). If you want more, then you can simply go into the PHP file and change the number of iterations.

Add comments...
-------------
+ You can add comments within each tab by clicking 'Add comment'. Point values are assigned positively, so if you want to see how many points to "take-off", use a negative number.
+ You can drag comments to re-order them
+ The temporary textbox within each tab is for comments specific to a certain student that will not generally apply to all students. They are automatically selected (leave blank if you do not want to add temporary comments). They are wiped out when "Grade new student" is used.

Protip: Make sure to add something like "2.1:" or "[2.1]" before your comment (Problem 2 part 1), so that they appear in the compiled-string as a reference.

Compiling comments...
----------------
+ Everything that is blue is "selected", and its text will be added to the output textbox.
+ Pressing the compile feedback button does not deselect your selections.

Start anew...
------------
Once you are done with a current student, clicking "Grade new student" simply de-selects everything, wipes out the temporary problem textboxes, and sets the total points to 0. Your comments will still remain.

Mac Install
------------
1. Make sure that your built-in web server is running
2. Download the zip file of this repo, unzip it, and place it in ~/Sites
3. Open in your browser at localhost/~dicksontsai/feedback_generator/index.php
 
Warning
--------
I did not implement LocalStorage support yet, so do NOT refresh or close the tab, because your data *will* be lost.

