<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('roles', function (Blueprint $table){
            $table->id();
			$table->string('name')->unique();
			$table->text('description')->nullable()->default(null);
			//Atributed to
			$table->boolean('atributed_to_ticket')->default(false);     //User can be atributed to a ticket
			$table->boolean('atributed_to_task')->default(false);       //User can be atributed to a task
			//Atribute
			$table->boolean('atribute_ticket')->default(false);		//User can atribute users to a ticket
			$table->boolean('atribute_task')->default(false);		//User can atribute users to a task
			//Tickets
			$table->boolean('create_ticket')->default(false);		//User can create a ticket inside a project
			$table->boolean('delete_ticket')->default(false);		//User can delete a ticket from the project
			$table->boolean('delete_owned_ticket')->default(false); //User can delete a ticket that he owns from the project
			$table->boolean('change_ticket_description')->default(false);			//user can change the description of a ticket
			$table->boolean('change_owned_ticket_description')->default(false);		//user can change the description of a ticket that he owns
			$table->boolean('change_atributed_ticket_description')->default(false);	//user can change the description of a ticket that he is atributed to
			$table->boolean('change_ticket_title')->default(false);					//user can change the title of a ticket
			$table->boolean('change_owned_ticket_title')->default(false);     		//user can change the title of a ticket that he owns
			$table->boolean('change_atributed_ticket_title')->default(false); 		//user can change the title of a ticket that he is atributed to
			$table->boolean('change_ticket_likelihood')->default(false);			//user can change the likelihood of a ticket
			$table->boolean('change_owned_ticket_likelihood')->default(false);      //user can change the likelihood of a ticket that he owns
			$table->boolean('change_atributed_ticket_likelihood')->default(false);  //user can change the likelihood of a ticket that he is atributed to
			$table->boolean('change_ticket_severity')->default(false);				//user can change the severity of a ticket
			$table->boolean('change_owned_ticket_severity')->default(false);        //user can change the severity of a ticket that he owns
			$table->boolean('change_atributed_ticket_severity')->default(false);    //user can change the severity of a ticket that he is atributed to
			$table->boolean('change_ticket_status')->default(false);				//user can change the status of a ticket
			$table->boolean('change_owned_ticket_status')->default(false);        	//user can change the status of a ticket that he owns
			$table->boolean('change_atributed_ticket_status')->default(false);    	//user can change the status of a ticket that he is atributed to
			$table->boolean('change_ticket_type')->default(false);					//user can change the type of a ticket
			$table->boolean('change_owned_ticket_type')->default(false);        	//user can change the type of a ticket that he owns
			$table->boolean('change_atributed_ticket_type')->default(false);    	//user can change the type of a ticket that he is atributed to
			//Tasks
			$table->boolean('create_task')->default(false);			//User can create a task to the project
			$table->boolean('delete_task')->default(false);			//User can delete a task from the project
			$table->boolean('delete_owned_task')->default(false);	//User can delete a task that he owns from the project
			$table->boolean('change_task_description')->default(false);				//user can change the description of a task
			$table->boolean('change_owned_task_description')->default(false);		//user can change the description of a task that he owns
			$table->boolean('change_atributed_task_description')->default(false);	//user can change the description of a task that he is atributed to
			$table->boolean('change_task_title')->default(false);					//user can change the title of a task
			$table->boolean('change_owned_task_title')->default(false);     		//user can change the title of a task that he owns
			$table->boolean('change_atributed_task_title')->default(false); 		//user can change the title of a task that he is atributed to
			$table->boolean('change_task_priority')->default(false);				//user can change the priority of a task
			$table->boolean('change_owned_task_priority')->default(false);     	 	//user can change the priority of a task that he owns
			$table->boolean('change_atributed_task_priority')->default(false);		//user can change the priority of a task that he is atributed to
			$table->boolean('change_task_deadline')->default(false);				//user can change the deadline of a task
			$table->boolean('change_owned_task_deadline')->default(false);        	//user can change the deadline of a task that he owns
			$table->boolean('change_atributed_task_deadline')->default(false);    	//user can change the deadline of a task that he is atributed to
			$table->boolean('change_task_status')->default(false);					//user can change the status of a task
			$table->boolean('change_owned_task_status')->default(false);        	//user can change the status of a task that he owns
			$table->boolean('change_atributed_task_status')->default(false);    	//user can change the status of a task that he is atributed to
			//Attachments
			$table->boolean('add_attachment_to_ticket')->default(false);				//User can add a attachment to a ticket
			$table->boolean('add_attachment_to_owned_ticket')->default(false);			//User can add a attachment to a ticket
			$table->boolean('add_attachment_to_atributed_ticket')->default(false);		//User can add a attachment to a ticket
			$table->boolean('add_attachment_to_project')->default(false);				//User can add a attachment to a project (Outside a ticket)
			$table->boolean('delete_attachment_from_ticket')->default(false);			//User can delete a attachment from any ticket in the project
			$table->boolean('delete_attachment_from_owned_ticket')->default(false);		//User can delete a attachment from tickets that he owns
			$table->boolean('delete_attachment_from_atributed_ticket')->default(false);	//User can delete a attachment from tickets that he is atrubuted to
			$table->boolean('delete_attachment_from_project')->default(false);			//User can delete a attachment from the project
			$table->boolean('delete_owned_attachment_from_project')->default(false);	//User can delete a attachment that he owns from the project
			//Comments
			$table->boolean('add_comment_to_ticket')->default(false);					//User can add a comment to a ticket
			$table->boolean('add_comment_to_owned_ticket')->default(false);				//User can add a comment to a ticket
			$table->boolean('add_comment_to_atributed_ticket')->default(false);			//User can add a comment to a ticket
			$table->boolean('add_comment_to_project')->default(false);					//User can add a comment to a project (Outside a ticket)
			$table->boolean('delete_comment_from_ticket')->default(false);				//User can delete a comments from any ticket in the project
			$table->boolean('delete_comment_from_owned_ticket')->default(false);		//User can delete a acomment from tickets that he owns
			$table->boolean('delete_comment_from_atributed_ticket')->default(false);	//User can delete a acomment from tickets that he is atrubuted to
			$table->boolean('delete_comment_from_project')->default(false);				//User can delete a comment from the project
			$table->boolean('delete_owned_comment_from_project')->default(false);	    //User can delete a comment that he owns from the project
			$table->timestamps();	//created_at and updated_at
            $table->softDeletes();	//deleted_at
            $table->bigInteger('created_by')->unsigned();
            $table->bigInteger('updated_by')->unsigned()->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('roles');
    }
}
