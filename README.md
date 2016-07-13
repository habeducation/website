# HAB.education

Static site for hab.education - education with high altitude balloons

## Build site

Run these commands for site setup

    npm install
    jekyll serve
    gulp


## Workflow for adding new balloon data to a CSV

* Import data into R (i.e. read.xlsx, or convert to CSV)
* Melt the data frame, and use timestamp as the ID variable. This uses the "reshape2" package and creates a "long" or "tidy" data format
* Add dataframe$cat=HAB_### to your melted data frame
* Append the melted dataframe to the rest of the balloon data
* Rename variables in the new data frame to match as much as possible the existing names in the other datasets
* Recast the data back to a normal format
