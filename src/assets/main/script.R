  # This R environment comes with all of CRAN preinstalled, as well as many other helpful packages
# For example, here's several helpful packages to load in 
library(tidyverse)
library(dplyr)
library(ggplot2) # Data visualization
library(readr) # CSV file I/O, e.g. the read_csv function
library(xlsx)
library(data.table)

# Input data files are available in the "../input/" directory.
# For example, running this (by clicking run or pressing Shift+Enter) will list the files in the input directory

system("ls ../input")

activity <- read_csv("D:/project/Activity.csv")
head(activity)
nrow(activity)
#na.omit(activity)
#nrow(activity)
#activity <- activity[sample(nrow(activity),10000), ]


asset <- read_csv("D:/project/asset.csv")
head(asset)
nrow(asset)



Transaction  <- read_csv("D:/project/Transaction.csv")
head(Transaction)
nrow(Transaction)

Experience <- read_csv("D:/project/Experience.csv")
head(Experience)
nrow(Experience)




ExcpTrans <- merge(Transaction,Experience,by = c("Unique_Investment_Id","Month"))
nrow(ExcpTrans)

#ExcpTrans <- ExcpTrans[sample(nrow(ExcpTrans),10000), ]

ExcpTrans_Aum <- merge(asset,ExcpTrans,by = c("Unique_Investment_Id","Month","Unique_Advisor_Id"))
nrow(ExcpTrans_Aum)


ExcpTrans_Aum_act <- merge(activity,ExcpTrans_Aum,by = c("Unique_Advisor_Id","Month"))
ExcpTrans_Aum_act <- tbl_df(ExcpTrans_Aum_act)
glimpse(ExcpTrans_Aum_act)
nrow(ExcpTrans_Aum_act)
#write.csv(ExcpTrans_Aum_act, file = "New.csv")
#colnames(ExcpTrans_Aum_act)[colSums(is.na(ExcpTrans_Aum_act)) > 0]
#ExcpTrans_Aum_act_NA<- ExcpTrans_Aum_act[!rowSums((is.na(ExcpTrans_Aum_act)))]
#glimpse(ExcpTrans_Aum_act_NA)
#write.csv(ExcpTrans_Aum_act_NA, file = "New.csv")

ExcpTrans_Aum_act <- na.omit(ExcpTrans_Aum_act)
nrow(ExcpTrans_Aum_act)
train_data <- ExcpTrans_Aum_act
train_data <- arrange(train_data,Month)
summary(train_data)
head(train_data)
write.csv(train_data, file = "New.csv")

glimpse(train_data)


train_data$Transaction_Type <- as.factor(train_data$Transaction_Type)
#train_data$Rating <- as.factor(train_data$Rating)
rating <- train_data$Rating
glimpse(train_data)

trans_type <- train_data$Transaction_Type
Shares <- train_data$Shares

setnames(train_data, old=c("Morningstar Category","1 Yr % Rank","3 Yr % Rank","5 Yr % Rank","10 Yr % Rank","1 Yr Return","3 Yr Return","5 Yr Return",
"10 Yr Return","1 Yr Excess Return vs Primary Ix","3 Yr Excess Return vs Primary Ix","5 Yr Excess Return vs Primary Ix","10 Yr Excess Return vs Primary Ix",
"1 Yr Excess Return vs Category Ix","3 Yr Excess Return vs Category Ix","5 Yr Excess Return vs Category Ix","10 Yr Excess Return vs Category Ix"), 
new=c("Morningstar_Category", "Year1_rankp","Year3_rankp","Year5_rankp","Year10_rankp","Year1_return","Year3_return","Year5_return","Year10_return",
"Year1_Excess_prm","Year3_Excess_prm","Year5_Excess_prm","Year10_Excess_prm","Year1_Excess_cat","Year3_Excess_cat","Year5_Excess_cat","Year10_Excess_cat"))

#names(data) <- c("new_name", "another_new_name")
#colnames(train_data)[which(names(train_data) == "Morningstar Category")] <- "Morningstar_Category"

train_data$Morningstar_Category <- as.factor(train_data$Morningstar_Category) 
category <- train_data$Morningstar_Category
table(trans_type)


logit.1 <- glm(trans_type ~ Rating + Year1_rankp + Year3_rankp + Year5_rankp + Year10_rankp + Year1_return + Year3_return
+ Year5_return + Year10_return + Year1_Excess_prm + Year3_Excess_prm + Year5_Excess_prm + Year10_Excess_prm + Year1_Excess_cat
+ Year3_Excess_cat + Year5_Excess_cat + Year1_Excess_cat, data= train_data, family = binomial(link="logit"))

summary(logit.1)

pscores <- predict(logit.1, type="response")
train_data["Propensity"] <- NA
train_data$Propensity<- pscores

write.csv(train_data, file = "New.csv")

getwd()
test_data <- read_csv("D:/project/test.csv")
head(test_data)
yr1_return <- train_data$Year1_return  
Excess <- train_data$Year1_Excess_prm
plot(trans_type,category,xlab="category",ylab="trans_type")
mylogit <- glm( trans_type ~ train_data$Morningstar_Category  , data = train_data, family = "binomial",maxit = 100)
summary(mylogit)
glimpse(train_data)
plot(mylogit)







# Any results you write to the current directory are saved as output.