# Governance V1

### 🧠 Democracy <a href="#democracy" id="democracy"></a>

_Let the votes begin!_

In the context of the Polkadot blockchain network, democracy refers to the process by which stakeholders can participate in the governance of the network. Polkadot uses a decentralized governance model in which stakeholders can propose and vote on changes to the network, such as updates to the protocol or the addition of new features. These votes are conducted using a “referendum” system, in which stakeholders can cast their votes on proposals using their stake in the network (i.e., the number of tokens they hold).

The goal of this democratic governance model is to allow stakeholders to have a say in the direction and evolution of the network, and to ensure that the network is run in a decentralized and transparent manner. By allowing stakeholders to participate in the decision-making process, Polkadot aims to create a more decentralized, transparent, and fair governance system for its blockchain network.

The section is primarily divided into two parts →

1. **Democracy Proposals**
2. **Referendum**

### Democracy Proposals <a href="#democracy-proposals" id="democracy-proposals"></a>

#### Creating a Democracy Proposal <a href="#creating-a-democracy-proposal" id="creating-a-democracy-proposal"></a>

**Process**

Anyone can propose a referendum by depositing the minimum amount of tokens for a certain period (number of blocks). If someone agrees with the proposal, they may deposit the same amount of tokens to support it – this action is called _endorsing_.

Please note, presently democracy proposals cannot be created via Polkassembly.

The proposal with the highest amount of bonded support will be selected to be a referendum in the next voting cycle.

Note that this may be different from the absolute number of endorsements; for instance, three accounts bonding 20 DOT each would “outweigh” ten accounts bonding a single DOT each.

* The bonded tokens will be released once the proposal is tabled (that is, brought to a vote).
* There can be a maximum of 100 public proposals in the proposal queue.

Once a Democracy Proposal gets accepted by the council, it becomes a Referendum.

#### Decoding a Democracy Proposal <a href="#decoding-a-democracy-proposal" id="decoding-a-democracy-proposal"></a>

The information about a proposal is divided into four sections -

**Description**

* This section is used to provide the complete context about the proposal and enable the community to discuss about it

**Timeline**

* The timeline provides a view of the timestamps of when a proposal was initiated as a discussion, followed by its evolution through various stages of a proposal and potentially its culmination into a referendum

**On Chain Information**

* The entire metadata and on-chain arguments for a proposal can be viewed in this section.
* Users can also look at earlier proposals proposed by the author and do their due diligence from this section.

***

**Endorsement Information**

* **Deposit** is the original amount deposited by the proposer.
* Anyone who wishes to endorse this proposal needs to match the amount.
* The number of addresses that endorse a proposal are listed under **Endorsed By**.
* **Locked KSM** is the total amount of KSM that is bonded by the endorsers. The proposal with the highest amount of endorsed or bonded support proceeds into the referendum phase in the next enactment cycle.

#### How to second a Democracy Proposal? <a href="#how-to-second-a-democracy-proposal" id="how-to-second-a-democracy-proposal"></a>

**Process**

Please follow these steps to endorse a democracy proposal created by a community member:

1. Use the navigation panel on the extreme left to head over to the **Proposals** tab for the network you have selected.
2. Click on the **Second** button to show your support for this proposal.
3. Select the account you would like to endorse the proposal with.

* _The proposal with the highest amount of support would be selected for voting in the next referendum cycle._
* _The final bonded support is used to differentiate between proposals. This means 3 accounts bonding 20 DOT will be preferred over 10 accounts bonding 1 DOT._

1. You would be required to sign the transaction with your wallet in order to confirm it.

* The bonded or deposited amount would be returned after the proposal is brought to a vote

### Referendum <a href="#referendum" id="referendum"></a>

**Referenda**

Referenda are simple, inclusive, stake-based voting schemes. Each referendum has a specific _proposal_ associated with it.

Referenda are discrete events, have a fixed period where voting happens, and then are tallied, and the function call is made if the vote is approved. Referenda are always binary; your only options in voting are “aye”, “nay”, or abstaining entirely.

All referenda have an _enactment delay_ associated with them. This is the period between the referendum ending and, assuming the proposal was approved, the changes being enacted.

Referenda is considered _baked_ if it is closed and tallied. Again, assuming the proposal was approved, it would be scheduled for enactment. Referenda is considered _unbaked_ if it is pending an outcome, i.e., being voted on.

#### Creating a Referendum <a href="#creating-a-referendum" id="creating-a-referendum"></a>

**How to start a Referendum?**

Referenda can be started in one of several ways:

* **Publicly submitted proposals** - They can become Referenda if they receive sufficient endorsements as mentioned in Creating a Democracy Proposal
* **Proposals submitted by the council** -\
  They can become Referenda if they are passed by the Council either through a majority or unanimously as mentioned in Council Motions (displayed with a Council Tag)
* **Proposals submitted as part of the enactment of a prior referendum**
* **Emergency proposals** They can become Referenda if they are submitted by the Technical Committee​ and approved by the Council

For the first two ways that a referendum is launched, this is a fixed time of 28 days. For the third type, it can be set as desired. Emergency proposals deal with major problems with the network that need to be “fast-tracked”. These will have a shorter enactment time.

#### Decoding a Referendum <a href="#decoding-a-referendum" id="decoding-a-referendum"></a>

The information about a proposal is divided into four sections -

**Description**

* This section is used to provide the complete context about the referendum and enable the community to discuss about it.
* The description will be the same as the discussion, proposal or motion to which the referendum is linked

**Timeline**

* The timeline provides a view of the timestamps of when a referendum was initiated as a discussion, followed by its evolution through various stages of a proposal and its culmination into a referendum

**On Chain Information**

* The entire metadata and on chain arguments for a referendum can be viewed in this section
* Users can also look at earlier proposals proposed by the author, and do their due diligence from this section

**Voting Information**

* A Referendum will have two tags next to it, the kind of majority required for it to pass (Simple Majority / Super Majority Approve / Super Majority Against) and its current status (Passing / Failing).
* Each kind of majority is defined in Voting on a Referendum under the Tallying Section
* The current status of the proposal is defined as Passing if it satisfies the majority voting condition and has the required turnout for the vote to pass
* The votes are calculated by taking conviction into account
  * The vote contribution is the vote amount \* conviction
  * The list of votes casted can be found below the proposal

#### Voting on a Referendum <a href="#voting-on-a-referendum" id="voting-on-a-referendum"></a>

**How does Voting work on Polkassembly?**

1. Use the navigation panel on the extreme left to head over to the Referenda tab for the network you have selected
2. Click on the cast vote button
3. You can choose the following while casting a vote

* Lock Balance - This is the amount of tokens that you wish to lock while voting for the referendum
* Vote with Account - Lets you choose the account with which you want to vote
* Vote Lock - Is the period for which you want to lock the amount you are voting with
  * If you lock for 0x, 1x, 2x, 3x … 6x enactment periods, your vote will get multiplied by 0.1x, 1x, 2x, 3x … 6x
  * This ensures that those with less tokens can also influence the outcome of the vote
  * The enactment period for Polkadot is 28 days. This varies for each network.

1. You would be required to sign the transaction with your wallet in order to confirm it.

**Learn about Voting**

**Voting Timetable​** In every referendum cycle (28 days for Polkadot), a new referendum will come up for a vote, assuming there is at least one proposal in one of the queues. There is a queue for Council-approved proposals (Council Motions) and a queue for publicly submitted proposals. The referendum to be voted upon alternates between the top proposal in the two queues.

The “top” proposal is determined by the amount of stake bonded behind it. If the given queue whose turn it is to create a referendum that has no proposals (is empty), and proposals are waiting in the other queue, the top proposal in the other queue will become a referendum.

Multiple referenda cannot be voted upon in the same period, excluding emergency referenda. An emergency referendum occurring at the same time as a regular referendum (either public- or council-proposed) is the only time that multiple referenda will be able to be voted on at once.

**Voting on a referendum​ - How it works?** To vote, a voter generally must lock their tokens up for at least the enactment delay period beyond the end of the referendum. This is in order to ensure that some minimal economic buy-in to the result is needed and to discourage vote selling.

It is possible to vote without locking at all, but your vote is worth a small fraction of a normal vote, given your stake. At the same time, holding only a small amount of tokens does not mean that the holder cannot influence the referendum result, thanks to time-locking.

Example:

Peter: Votes No with 10 DOT for a 128 week lock period => 10 x 6 = 60 Votes

Logan: Votes Yes with 20 DOT for a 4 week lock period => 20 x 1 = 20 Votes

Kevin: Votes Yes with 15 DOT for a 8 week lock period => 15 x 2 = 30 Votes

Even though combined both Logan and Kevin vote with more DOT than Peter, the lock period for both of them is less than Peter, leading to their voting power counting as less.

**Tallying**

Depending on which entity proposed the proposal and whether all council members voted yes, there are three different scenarios. We can use the following table for reference.

Also, we need the following information and apply one of the formulas listed below to calculate the voting result. Let’s use the public proposal as an example, so the Super-Majority Approve formula will be applied. There is no strict quorum, but the super-majority required increases with lower turnout.

approve - the number of aye votes

against - the number of nay votes

turnout - the total number of voting tokens (does not include conviction)

electorate - the total number of tokens issued in the network

**Super-Majority Approve​** A positive turnout bias, whereby a heavy super-majority of aye votes is required to carry at low turnouts, but as turnout increases towards 100%, it becomes a simple majority-carries as below.

**Super-Majority Against​** A negative turnout bias, whereby a heavy super-majority of nay votes is required to reject at low turnouts, but as turnout increases towards 100%, it becomes a simple majority-carries as below.

**Simple-Majority​** Majority-carries, a simple comparison of votes; if there are more aye votes than nay, then the proposal is carried, no matter how much stake votes on the proposal.

_To know more about where these above formulas come from, please read the_ [_democracy pallet_](https://github.com/paritytech/substrate/blob/master/frame/democracy/src/vote_threshold.rs)_._

Example:

Assume we only have 1\_500 DOT tokens in total and that this is a public proposal.

* John: 500 DOT
* Peter: 100 DOT
* Lilly: 150 DOT
* JJ: 150 DOT
* Ken: 600 DOT

John: Votes Yes for a 4 week lock period => 500 x 1 = 500 Votes

Peter: Votes Yes for a 4 week lock period => 100 x 1 = 100 Votes

JJ: Votes No for a 16 week lock period => 150 x 3 = 450 Votes

* approve = 600
* against = 450
* turnout = 750
* electorate = 1500

Since the above example is a public referendum, Super-Majority Approve would be used to calculate the result. Super-Majority Approve requires more aye votes to pass the referendum when turnout is low, therefore, based on the above result, the referendum will be rejected. In addition, only the winning voter’s tokens are locked. If the voters on the losing side of the referendum believe that the outcome will have negative effects, their tokens are transferrable so they will not be locked into the decision. Moreover, winning proposals are autonomously enacted only after some enactment period.

**Voluntary Locking​** Polkadot utilizes an idea called Voluntary Locking that allows token holders to increase their voting power by declaring how long they are willing to lock up their tokens, hence, the number of votes for each token holder will be calculated by the following formula:

_votes = tokens \* conviction\_multiplier_

The conviction multiplier increases the vote multiplier by one every time the number of lock periods double.

The maximum number of “doublings” of the lock period is set to 6 (and thus 32 lock periods in total), and one lock period equals 28 days. Only doublings are allowed; you cannot lock for, say, 24 periods and increase your conviction by 5.5. For additional information regarding the timeline of governance events, check out the governance section on the Polkadot Parameters page.

While a token is locked, you can still use it for voting and staking; you are only prohibited from transferring these tokens to another account.

Votes are still “counted” at the same time (at the end of the voting period), no matter for how long the tokens are locked.

**Adaptive Quorum Biasing​** Polkadot introduces a concept, “Adaptive Quorum Biasing”, which functions as a lever that the council can use to alter the effective super-majority required to make it easier or more difficult for a proposal to pass in the case that there is no clear majority of voting power backing it or against it.

Let’s use the above image as an example.

If a publicly submitted referendum only has a 25% turnout, the tally of “aye” votes has to reach 66% for it to pass since we applied Positive Turnout Bias.

In contrast, when it has a 75% turnout, the tally of “aye” votes has to reach 54%, which means that the super-majority required decreases as the turnout increases.

When the council proposes a new proposal through unanimous consent, the referendum would be put to a vote using “Negative Turnout Bias”. In this case, it is easier to pass this proposal with low turnout and requires a super-majority to reject. As more token holders participate in voting, the bias approaches a plain majority carries.

Referring to the above image, when a referendum only has 25% turnout, the tally of “aye” votes has to reach 34% for it to pass.

In short, when the turnout rate is low, a super-majority is required to reject the proposal, which means a lower threshold of “aye” votes have to be reached, but as turnout increases towards 100%, it becomes a simple majority.

All three tallying mechanisms - majority carries, super-majority approve, and super-majority against - equate to a simple majority-carries system at 100% turnout.

### 🏦 Treasury <a href="#treasury" id="treasury"></a>

Focus on the innovation!

In the context of the Polkadot blockchain, the treasury is a fund that is used to finance the development and maintenance of the network.

The purpose of the treasury system is to allow the community to collectively fund and prioritize the development of the Polkadot network and ecosystem. This helps to ensure that the network is continually improving and evolving, and that the needs and priorities of the community are taken into account.

It is broken down into three primary parts -

* Proposal
* Bounties & Child Bounties
* Tips

### Treasury Proposals <a href="#treasury-proposals" id="treasury-proposals"></a>

A treasury proposal is a request for funding that is made to the treasury by a member of the Polkadot community.

This proposal outlines the planned use of the funds and the expected benefits to the network. The proposal is then voted on by the community, and if it is approved, the funds are released from the treasury to the proposer.

#### Creating a Treasury Proposal <a href="#creating-a-treasury-proposal" id="creating-a-treasury-proposal"></a>

**Process**

**Requirements**

The proposer has to deposit a minimum of 100 DOT or 5% of the requested amount with a maximum cap of 500 DOT as an anti-spam measure. This amount is burned if the proposal is rejected, or refunded otherwise. These values are subject to [governance](https://wiki.polkadot.network/docs/learn-governance) so they may change in the future.

Please note that there is no way for a user to revoke a treasury proposal after it has been submitted. The Council will either accept or reject the proposal, and if the proposal is rejected, the bonded funds are burned.

**Announcing the Proposal​**

To minimize storage on chain, proposals don’t contain contextual information. When a user submits a proposal, they need an off-chain way to explain the proposal. Most discussion takes place on the following platforms:

* The [Polkassembly](https://polkassembly.io/) discussion platform that allows users to log in with their Web3 address and automatically reads proposals from the chain, turning them into discussion threads. It also offers a sentiment gauge poll to get a feel for a proposal before committing to a vote.
* Many community members participate in discussion in the [Kusama Element (previously Riot)](https://matrix.to/#/#kusama:matrix.parity.io) chat or [Polkadot Element](https://matrix.to/#//#polkadot:matrix.parity.io).

**Creating the Proposal​**

* Community Members have multiple ways to [start](https://wiki.polkadot.network/docs/learn-treasury#creating-the-proposal) a treasury proposal
  * 1st - Start an on chain proposal which will be automatically shown on Polkassembly (refer here)
  * 2nd - Start a proposal directly on Polkassembly

**Creating a Proposal​ using Polkassembly**

Creating a treasury proposal on [Polkassembly](https://polkadot.polkassembly.io/treasury-proposals) is very simple.

1. Use the navigation panel on the extreme left to head over to the [Treasury Proposals](https://polkadot.polkassembly.io/treasury-proposals) tab for the network you have selected
2. Click on the **Add New Proposal** button
3. Link your treasury proposal to the discussion post created for community deliberation (optional)
4. Fill up the form and lock your deposit to create the proposal!

* Remember that the proposal has no metadata, so it’s up to the proposer to create a description and purpose that the Council could study and base their votes on.

1. Add a description and title to share contextual information

**How does a proposal get accepted / rejected?**

After the creation of a proposal, a Council member can create a motion to accept or to reject the treasury proposal. It is possible that one motion to accept and another motion to reject are both created. The proportions to accept and reject Council proposals vary between accept or reject, and possibly depend on which network the Treasury is implemented.

The threshold for accepting a treasury proposal is at least three-fifths of the Council. On the other hand, the threshold for rejecting a proposal is at least one-half of the Council.

#### Decoding a Democracy Proposal <a href="#decoding-a-democracy-proposal-1" id="decoding-a-democracy-proposal-1"></a>

The information about a proposal is divided into four sections -

**Description**

* This section is used to provide the complete context about a treasury proposal and enable the community to discuss about it.
  * The description will be the same as the discussion to which the proposal is linked

**Timeline**

* The timeline provides a view of the timestamps of when a treasury proposal was initiated as a discussion, followed by its evolution through various stages.

**On Chain Information**

* The entire metadata and on chain arguments for a proposal can be viewed in this section
* Users can also look at earlier proposals proposed by the author, and do their due diligence from this section

**Voting Information**

* A proposal that is being voted upon will be visible as a Council Motions(with a Treasury tag)
* Only council members are allowed to vote on a treasury proposal in Governance V1
  * The threshold for accepting a treasury proposal is at least three-fifths of the Council.
  * On the other hand, the threshold for rejecting a proposal is at least one-half of the Council.

### Tips <a href="#tips" id="tips"></a>

**Tipping​**

Next to the proposals process, a separate system for making tips exists for the Treasury. Tips can be suggested by anyone and are supported by members of the Council. Tips do not have any definite value, and the final value of the tip is decided based on the median of all tips issued by the tippers.

Currently, the tippers are the same as the members of the Council. However, being a tipper is not the direct responsibility of the Council, and at some point the Council and the tippers may be different groups of accounts.

A tip will enter a closing phase when more than a half plus one of the tipping group have endorsed a tip. During that time frame, the other members of the tipping group can still issue their tips, but do not have to. Once the window closes, anyone can call the close\_tip extrinsic, and the tip will be paid out.

There are two types of tips:

* public: A small bond is required to place them. This bond depends on the tip message length, and a fixed bond constant defined on chain, currently 1 DOT. Public tips carry a finder’s fee of 20%, which is paid out from the total amount.
* tipper-initiated: Tips that a Council member published, do not have a finder’s fee or a bond.

**INFO**

For information about how to submit a tip from the Treasury you can read [this support article.](https://support.polkadot.network/support/solutions/articles/65000181971)

To better understand the process a tip goes through until it is paid out, let’s consider the example below.

**Example​** Bob has done something great for Polkadot. Alice has noticed this and decides to report Bob as deserving a tip from the Treasury. The Council is composed of three members Charlie, Dave, and Eve.

Alice begins the process by issuing the report\_awesome extrinsic. This extrinsic requires two arguments, a reason and the beneficiary. Alice submits Bob’s address with the reason to a post on [Polkassembly](https://polkadot.polkassembly.io/) that explains her reasoning for why Bob deserves the tip.

As mentioned above, Alice must also lock up a deposit for making this report. The deposit is the base deposit as set in the chain’s parameter list, plus the additional deposit per byte contained in the reason. This is why Alice submitted a URL as the reason instead of the explanation directly: it was cheaper for her to do so. For her trouble, Alice is able to claim the eventual finder’s fee if the tip is approved by the tippers.

Since the tipper group is the same as the Council, the Council must now collectively (but also independently) decide on the value of the tip that Bob deserves. Charlie, Dave, and Eve all review the report and make tips according to their personal valuation of the benefit Bob has provided to Polkadot. Charlie tips 10 DOT, Dave tips 30 DOT, and Eve tips 100 DOT.

The tip could have been closed out with only two of the three tippers. Once more than half of the tippers group have issued tip valuations, the countdown to close the tip will begin. In this case, the third tipper issued their tip before the end of the closing period, so all three were able to make their tip valuations known.

The actual tip that will be paid out to Bob is the median of these tips, so Bob will be paid out 30 DOT from the Treasury. In order for Bob to be paid his tip, some account must call the close\_tip extrinsic at the end of the closing period for the tip. This extrinsic may be called by anyone.

### Bounties & Child Bounties <a href="#bounties--child-bounties" id="bounties--child-bounties"></a>

There are practical limits to Council Members curation capabilities when it comes to treasury proposals: Council members likely do not have the expertise to make a proper assessment of the activities described in all proposals. Even if individual Councillors have that expertise, it is highly unlikely that a majority of members are capable in such diverse topics.

Bounties Spending proposals aim to delegate the curation activity of spending proposals to experts called **Curators**: They can be defined as addresses with agency over a portion of the Treasury with the goal of fixing a bug or vulnerability, developing a strategy, or monitoring a set of tasks related to a specific topic: all for the benefit of the Polkadot ecosystem.

A proposer can submit a bounty proposal for the Council to pass, with a curator to be defined later, whose background and expertise is such that they are capable of determining when the task is complete. Curators are selected by the Council after the bounty proposal passes, and need to add an upfront payment to take the position. This deposit can be used to punish them if they act maliciously. However, if they are successful in their task of getting someone to complete the bounty work, they will receive their deposit back and part of the bounty reward.

When submitting the value of the bounty, the proposer includes a reward for curators willing to invest their time and expertise in the task: this amount is included in the total value of the bounty. In this sense, the curator’s fee can be defined as the result of subtracting the value paid to the bounty rewardee from the total value of the bounty.

In general terms, curators are expected to have a well-balanced track record related to the issues the bounty tries to resolve: they should be at least knowledgeable on the topics the bounty touches, and show project management skills or experience. These recommendations ensure an effective use of the mechanism. A Bounty Spending is a reward for a specified body of work - or specified set of objectives - that needs to be executed for a predefined treasury amount to be paid out. The responsibility of assigning a payout address once the specified set of objectives is completed is delegated to the curator.

After the Council has activated a bounty, it delegates the work that requires expertise to the curator who gets to close the active bounty. Closing the active bounty enacts a delayed payout to the payout address and a payout of the curator fee. The delay phase allows the Council to act if any issues arise.

To minimize storage on chain in the same way as any proposal, bounties don’t contain contextual information. When a user submits a bounty spending proposal, they will probably need to find an off-chain way, like Polkassembly, to explain the proposal (any of the available community forums serve this purpose).[ This template](https://docs.google.com/document/d/1-IBz_owspV5OcvezWXpksWDQReWowschD0TFuaVKKcU/edit?tab=t.0) can help as a checklist of all needed information for the Council to make an informed decision.

The bounty has a predetermined duration of 90 days with the possibility of being extended by the curator. Aiming to maintain flexibility on the tasks’ curation, the curator will be able to create sub-bounties for more granularity and allocation in the next iteration of the mechanism.

Creating a Bounty Proposal​ Anyone can create a Bounty proposal using Polkadot-JS Apps: Users are able to submit a proposal on the dedicated Bounty section under Governance. The development of a robust user interface to view and manage bounties in the Polkadot Apps is still under development and it will serve Council members, Curators and Beneficiaries of the bounties, as well as all users observing the on-chain treasury governance. For now, the help of a Councillor is needed to open a bounty proposal as a motion to be voted.

To submit a bounty, please visit [Polkadot-JS Apps](https://polkadot.js.org/apps/#/explorer): and click on the governance tab in the options bar on the top of the site. After, click on ‘Bounties’ and find the button ‘+ Add Bounty’ on the upper-right side of the interface. Complete the bounty title, the requested allocation (including curator’s fee) and confirm the call.

After this, a Council member will need to assist you to pass the bounty proposal for vote as a motion. You can contact the Council by joining the Polkadot Direction channel in Element or joining our Polkadot Discord [server](https://discord.com/invite/P93dxU4TCQ) and publishing a short description of your bounty, with a link to one of the [forums](https://wiki.polkadot.network/docs/learn-treasury#announcing-the-proposal) for contextual information.

A bounty can be cancelled by deleting the earmark for a specific treasury amount or be closed if the tasks have been completed. On the opposite side, the 90 days life of a bounty can be extended by amending the expiry block number of the bounty to stay active.

Closing a bounty​ The curator can close the bounty once they approve the completion of its tasks. The curator should make sure to set up the payout address on the active bounty beforehand. Closing the Active bounty enacts a delayed payout to the payout address and a payout of the curator fee.

A bounty can be closed by using the extrinsics tab and selecting the Treasury pallet, then Award\_bounty, making sure the right bounty is to be closed and finally sign the transaction. It is important to note that those who received a reward after the bounty is completed, must claim the specific amount of the payout from the payout address, by calling Claim\_bounty after the curator closed the allocation.

To understand more about Bounties and how this new mechanism works, read this [Polkadot Blog post.](https://polkadot.com/)

### 🕵️‍♂️ Council <a href="#council" id="council"></a>

To represent passive stakeholders, Polkadot introduces the idea of a “council”. The council is an on-chain entity comprising several actors, each represented as an on-chain account. On Polkadot, the council currently consists of 13 members.

Along with controlling the treasury, the council is called upon primarily for three tasks of governance: proposing sensible referenda, cancelling uncontroversially dangerous or malicious referenda, and electing the technical committee.

For a referendum to be proposed by the council, a strict majority of members must be in favor, with no member exercising a veto. Vetoes may be exercised only once by a member for any single proposal; if, after a cool-down period, the proposal is resubmitted, they may not veto it a second time.

Council motions which pass with a 3/5 (60%) super-majority - but without reaching unanimous support - will move to a public referendum under a neutral, majority-carries voting scheme. In the case that all members of the council vote in favor of a motion, the vote is considered unanimous and becomes a referendum with negative adaptive quorum biasing.

**How to be a council member?**

All stakeholders are free to signal their approval of any of the registered candidates.

Council elections are handled by the same [Phragmén election](https://wiki.polkadot.network/docs/learn-phragmen) process that selects validators from the available pool based on nominations. However, token holders’ votes for councillors are isolated from any of the nominations they may have on validators. Council terms last for one week.

At the end of each term, [Phragmén election algorithm](https://wiki.polkadot.network/docs/learn-phragmen#algorithm) runs and the result will choose the new councillors based on the vote configurations of all voters. The election also chooses a set number of runners up which is currently (20 that will remain in the queue with their votes intact.

As opposed to a “first-past-the-post” electoral system, where voters can only vote for a single candidate from a list, a Phragmén election is a more expressive way to include each voters’ views. Token holders can treat it as a way to support as many candidates as they want. The election algorithm will find a fair subset of the candidates that most closely matches the expressed indications of the electorate as a whole.

Round 1

| Token Holders | Candidates |       |       |       |       |
| ------------- | ---------- | ----- | ----- | ----- | ----- |
|               | **A**      | **B** | **C** | **D** | **E** |
| **Peter**     | X          |       | X     | X     | X     |
| **Alice**     |            | X     |       |       |       |
| **Bob**       |            |       | X     | X     | X     |
| **Kelvin**    | X          |       |       |       |       |
| **Total**     | 2          | 1     | 3     | 2     | 2     |

The above example shows that candidate C wins the election in round 1, while candidates A, B, D & E keep remaining on the candidates’ list for the next round.

Round 2

| Token Holders | Candidates |       |       |       |
| ------------- | ---------- | ----- | ----- | ----- |
|               | **A**      | **B** | **D** | **E** |
| **Peter**     | X          | X     |       |       |
| **Alice**     | X          | X     |       |       |
| **Bob**       | X          | X     | X     | X     |
| **Kelvin**    | X          | X     |       |       |
| **Total**     | 4          | 4     | 1     | 1     |

For the top-N (say 4 in this example) runners-up, they can remain and their votes persist until the next election. After round 2, even though candidates A & B get the same number of votes in this round, candidate A gets elected because after adding the older unused approvals, it is higher than B.

Prime Members​ The council, being an instantiation of [Substrate’s Collective pallet](https://github.com/paritytech/substrate/tree/master/frame/collective), implements what’s called a prime member whose vote acts as the default for other members that fail to vote before the timeout.

The prime member is chosen based on a [Borda count.](https://en.wikipedia.org/wiki/Borda_count)

The purpose of having a prime member of the council is to ensure a quorum, even when several members abstain from a vote. Council members might be tempted to vote a “soft rejection” or a “soft approval” by not voting and letting the others vote. With the existence of a prime member, it forces councillors to be explicit in their votes or have their vote counted for whatever is voted on by the prime.

### Members <a href="#members" id="members"></a>

The section allows the community to do the following:

1. Have a look at the current council members and runners up
2. Discover details about the council members
3. Look at voting history details of council members

### Council Motions <a href="#council-motions" id="council-motions"></a>

There are two primary kinds of council motions

1. Council (Governanace)
2. Treasury

**Council (Governanace)**

Unanimous Council - When all members of the council agree on a proposal, it can be moved to a referendum. This referendum will have a negative turnout bias (that is, the smaller the amount of stake voting, the smaller the amount necessary for it to pass - see [Adaptive Quorum Biasing](https://wiki.polkadot.network/docs/learn-governance#adaptive-quorum-biasing)).

Majority Council - When agreement from only a simple majority of council members occurs, the referendum can also be voted upon, but it will be majority-carries (51% wins).

There can only be one active referendum at any given time, except when there is also an emergency referendum in progress.

**Treasury** A Council member can create a motion to accept or to reject the treasury proposal. It is possible that one motion to accept and another motion to reject are both created. The proportions to accept and reject Council proposals vary between accept or reject, and possibly depend on which network the Treasury is implemented.

The threshold for accepting a treasury proposal is at least three-fifths of the Council. On the other hand, the threshold for rejecting a proposal is at least one-half of the Council.

### 🧑‍💻 Technical Committee <a href="#technical-committee" id="technical-committee"></a>

**Technical Committee​**

The Technical Committee(TC) was introduced in the [Kusama rollout and governance post](https://polkadot.com/) as one of the three chambers of Kusama governance (along with the Council and the Referendum chamber). The TC is composed of the teams that have successfully implemented or specified either a Polkadot runtime or Polkadot Host. Teams are added or removed from the TC via a simple majority vote of the Council.

The purpose of the TC is to safeguard against malicious referenda, implement bug fixes, reverse faulty runtime updates, or add new but battle-tested features. The TC has the power to fast-track proposals by using the Democracy pallet, and is the only origin that is able to trigger the fast-tracking functionality. We can think of the TC as a “unique origin” that cannot generate proposals, but are able to fast track existing proposals.

Fast-tracked referenda are the only type of referenda that can be active alongside another active referendum. Thus, with fast-tracked referenda it is possible to have two active referendums at the same time. Voting on one does not prevent a user from voting on the other.

**Canceling​**

A proposal can be canceled if the [technical committee](https://wiki.polkadot.network/docs/learn-governance#technical-committee) unanimously agrees to do so, or if Root origin (e.g. sudo) triggers this functionality. A canceled proposal’s deposit is burned.

Additionally, a two-thirds majority of the council can cancel a referendum. This may function as a last-resort if there is an issue found late in a referendum’s proposal such as a bug in the code of the runtime that the proposal would institute.

If the cancellation is controversial enough that the council cannot get a two-thirds majority, then it will be left to the stakeholders en masse to determine the fate of the proposal.
