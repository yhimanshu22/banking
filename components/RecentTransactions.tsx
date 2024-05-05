import { getAccountTypeColors } from "@/lib/utils";

const RecentTransactions = () => {
  return (
    <section>
      <header>
        <h2></h2>
        <Link>View All</Link>
      </header>

      <Tabs>
        <TabsList>{accounts.map()=>{
          <TabsTrigger>

            <BankTabItem key={account.id}
              account={account}
              appwriteItemId={appwriteItemId}
            />
          </TabsTrigger>
        }}</TabsList>
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
